import React, {
    MutableRefObject,
    ReactElement,
    useEffect,
    useState,
} from 'react';
import { FormikErrors, FormikProps, FormikValues } from 'formik';
import BaseModel from 'Common/Models/BaseModel';
import FormValues from './Types/FormValues';
import Fields from './Types/Fields';
import BasicModelForm from './BasicModelForm';
import { JSONArray, JSONObject, JSONObjectOrArray } from 'Common/Types/JSON';
import URL from 'Common/Types/API/URL';
import HTTPResponse from 'Common/Types/API/HTTPResponse';
import ModelAPI, {
    ListResult,
    RequestOptions,
} from '../../Utils/ModelAPI/ModelAPI';
import HTTPErrorResponse from 'Common/Types/API/HTTPErrorResponse';
import Select from '../../Utils/ModelAPI/Select';
import Dictionary from 'Common/Types/Dictionary';
import useAsyncEffect from 'use-async-effect';
import ObjectID from 'Common/Types/ObjectID';
import Loader, { LoaderType } from '../Loader/Loader';
import { VeryLightGrey } from 'Common/Types/BrandColors';
import Permission, {
    PermissionHelper,
    UserPermission,
} from 'Common/Types/Permission';
import PermissionUtil from '../../Utils/Permission';
import { ColumnAccessControl } from 'Common/Types/Database/AccessControl/AccessControl';
import BadDataException from 'Common/Types/Exception/BadDataException';
import { LIMIT_PER_PROJECT } from 'Common/Types/Database/LimitMax';
import Populate from '../../Utils/ModelAPI/Populate';
import FileModel from 'Common/Models/FileModel';
import TableColumnType from 'Common/Types/Database/TableColumnType';
import Typeof from 'Common/Types/Typeof';
import { TableColumnMetadata } from 'Common/Types/Database/TableColumn';

export enum FormType {
    Create,
    Update,
}

export interface ComponentProps<TBaseModel extends BaseModel> {
    modelType: { new (): TBaseModel };
    id: string;
    onValidate?:
        | undefined
        | ((
              values: FormValues<TBaseModel>
          ) => FormikErrors<FormValues<TBaseModel>>);
    fields: Fields<TBaseModel>;
    submitButtonText?: undefined | string;
    title?: undefined | string;
    description?: undefined | string;
    showAsColumns?: undefined | number;
    footer: ReactElement;
    onCancel?: undefined | (() => void);
    onSuccess?:
        | undefined
        | ((data: TBaseModel | JSONObjectOrArray | Array<TBaseModel>) => void);
    cancelButtonText?: undefined | string;
    maxPrimaryButtonWidth?: undefined | boolean;
    apiUrl?: undefined | URL;
    formType: FormType;
    hideSubmitButton?: undefined | boolean;
    formRef?: undefined | MutableRefObject<FormikProps<FormikValues>>;
    onLoadingChange?: undefined | ((isLoading: boolean) => void);
    initialValues?: FormValues<TBaseModel> | undefined;
    modelIdToEdit?: ObjectID | undefined;
    onError?: ((error: string) => void) | undefined;
    onBeforeCreate?: ((item: TBaseModel) => Promise<TBaseModel>) | undefined;
    saveRequestOptions?: RequestOptions | undefined;
}

const ModelForm: Function = <TBaseModel extends BaseModel>(
    props: ComponentProps<TBaseModel>
): ReactElement => {
    const [fields, setFields] = useState<Fields<TBaseModel>>([]);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [isFetchingDropdownOptions, setIsFetchingDropdownOptions] =
        useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [itemToEdit, setItemToEdit] = useState<TBaseModel | null>(null);
    const model: TBaseModel = new props.modelType();

    const getSelectFields: Function = (): Select<TBaseModel> => {
        const select: Select<TBaseModel> = {};
        for (const field of props.fields) {
            const key: string | null = field.field
                ? (Object.keys(field.field)[0] as string)
                : null;

            if (key) {
                (select as Dictionary<boolean>)[key] = true;
            }
        }

        return select;
    };

    const getPopulate: Function = (): Populate<TBaseModel> => {
        const populate: Populate<TBaseModel> = {};

        for (const field of props.fields) {
            const key: string | null = field.field
                ? (Object.keys(field.field)[0] as string)
                : null;

            if (key && model.isFileColumn(key)) {
                (populate as JSONObject)[key] = {
                    file: true,
                    _id: true,
                    type: true,
                    name: true,
                };
            } else if (key && model.isEntityColumn(key)) {
                (populate as JSONObject)[key] = (field.field as any)[key];
            }
        }

        return populate;
    };

    const setFormFields: Function = async (): Promise<void> => {
        let userPermissions: Array<Permission> =
            PermissionUtil.getGlobalPermissions()?.globalPermissions || [];
        if (
            PermissionUtil.getProjectPermissions() &&
            PermissionUtil.getProjectPermissions()?.permissions &&
            PermissionUtil.getProjectPermissions()!.permissions.length > 0
        ) {
            userPermissions = userPermissions.concat(
                PermissionUtil.getProjectPermissions()!.permissions.map(
                    (i: UserPermission) => {
                        return i.permission;
                    }
                )
            );
        }

        userPermissions.push(Permission.Public);

        const accessControl: Dictionary<ColumnAccessControl> =
            model.getColumnAccessControlForAllColumns();

        let fieldsToSet: Fields<TBaseModel> = [];

        for (const field of props.fields) {
            const keys: Array<string> = Object.keys(field.field);

            if (keys.length > 0) {
                const key: string = keys[0] as string;

                let fieldPermissions: Array<Permission> = [];

                if (FormType.Create === props.formType) {
                    fieldPermissions = accessControl[key]?.create || [];
                } else {
                    fieldPermissions = accessControl[key]?.update || [];
                }

                if (
                    fieldPermissions &&
                    PermissionHelper.doesPermissionsIntersect(
                        userPermissions,
                        fieldPermissions
                    )
                ) {
                    fieldsToSet.push(field);
                }
            }
        }

        fieldsToSet = await fetchDropdownOptions(fieldsToSet);

        setFields(fieldsToSet);
    };

    useEffect(() => {
        // set fields.
        setFormFields();
    }, []);

    const fetchItem: Function = async (): Promise<void> => {
        if (!props.modelIdToEdit || props.formType !== FormType.Update) {
            throw new BadDataException('Model ID to update not found.');
        }

        let item: TBaseModel | null = await ModelAPI.getItem(
            props.modelType,
            props.modelIdToEdit,
            getSelectFields(),
            getPopulate()
        );

        if (!(item instanceof BaseModel) && item) {
            item = new props.modelType().fromJSON(
                item as JSONObject,
                props.modelType
            );
        }

        if (!item) {
            setError(
                `Cannot edit ${(
                    model.singularName || 'item'
                ).toLowerCase()}. It could be because you don't have enough permissions to read or edit this ${(
                    model.singularName || 'item'
                ).toLowerCase()}.`
            );
        }

        const populate: Populate<TBaseModel> = getPopulate();

        for (const key in populate) {
            if (item) {
                if (Array.isArray((item as any)[key])) {
                    const idArray: Array<string> = [];
                    let isModelArray: boolean = false;
                    for (const itemInArray of (item as any)[key] as any) {
                        if (typeof (itemInArray as any) === 'object') {
                            if ((itemInArray as any as JSONObject)['_id']) {
                                isModelArray = true;
                                idArray.push(
                                    (itemInArray as any as JSONObject)[
                                        '_id'
                                    ] as string
                                );
                            }
                        }
                    }

                    if (isModelArray) {
                        (item as any)[key] = idArray;
                    }
                }
                if (
                    (item as any)[key] &&
                    typeof (item as any)[key] === 'object' &&
                    !((item as any)[key] instanceof FileModel)
                ) {
                    if (((item as any)[key] as JSONObject)['_id']) {
                        (item as any)[key] = ((item as any)[key] as JSONObject)[
                            '_id'
                        ] as string;
                    }
                }
            }
        }

        setItemToEdit(item);
    };

    const fetchDropdownOptions: Function = async (
        fields: Fields<TBaseModel>
    ): Promise<Fields<TBaseModel>> => {
        setIsFetchingDropdownOptions(true);

        try {
            for (const field of fields) {
                if (field.dropdownModal && field.dropdownModal.type) {
                    const listResult: ListResult<BaseModel> =
                        await ModelAPI.getList<BaseModel>(
                            field.dropdownModal.type,
                            {},
                            LIMIT_PER_PROJECT,
                            0,
                            {
                                [field.dropdownModal.labelField]: true,
                                [field.dropdownModal.valueField]: true,
                            },
                            {}
                        );

                    if (listResult.data && listResult.data.length > 0) {
                        field.dropdownOptions = listResult.data.map(
                            (item: BaseModel) => {
                                if (!field.dropdownModal) {
                                    throw new BadDataException(
                                        'Dropdown Modal value mot found'
                                    );
                                }

                                return {
                                    label: (item as any)[
                                        field.dropdownModal?.labelField
                                    ].toString(),
                                    value: (item as any)[
                                        field.dropdownModal?.valueField
                                    ].toString(),
                                };
                            }
                        );
                    } else {
                        field.dropdownOptions = [];
                    }
                }
            }

            setIsFetchingDropdownOptions(false);
        } catch (err) {
            try {
                setError(
                    (err as HTTPErrorResponse).message ||
                        'Server Error. Please try again'
                );
            } catch (e) {
                setError('Server Error. Please try again');
            }
        }

        return fields;
    };

    useAsyncEffect(async () => {
        if (props.modelIdToEdit && props.formType === FormType.Update) {
            // get item.
            setLoading(true);
            setIsFetching(true);
            setError('');
            try {
                await fetchItem();
            } catch (err) {
                let error: string = '';
                try {
                    error =
                        (err as HTTPErrorResponse).message ||
                        'Server Error. Please try again';
                } catch (e) {
                    error = 'Server Error. Please try again';
                }
                setError(error);
                props.onError && props.onError(error);
            }

            setLoading(false);
            setIsFetching(false);
        }
    }, []);

    const getmiscDataProps: Function = (values: JSONObject): JSONObject => {
        const result: JSONObject = {};

        for (const field of fields) {
            if (field.overideFieldKey && values[field.overideFieldKey]) {
                result[field.overideFieldKey] =
                    values[field.overideFieldKey] || null;
            }
        }

        return result;
    };

    const onSubmit: Function = async (values: JSONObject): Promise<void> => {
        // Ping an API here.
        setError('');
        setLoading(true);
        if (props.onLoadingChange) {
            props.onLoadingChange(true);
        }

        let result: HTTPResponse<
            JSONObject | JSONArray | TBaseModel | Array<TBaseModel>
        >;

        try {
            // strip data.
            const valuesToSend: JSONObject = {};

            for (const key in getSelectFields()) {
                (valuesToSend as any)[key] = values[key];
            }

            if (props.formType === FormType.Update && props.modelIdToEdit) {
                (valuesToSend as any)['_id'] = props.modelIdToEdit.toString();
            }

            const miscDataProps: JSONObject = getmiscDataProps(values);

            // remove those props from valuesToSend
            for (const key in miscDataProps) {
                delete valuesToSend[key];
            }

            for (const key of model.getTableColumns().columns) {
                const tableColumnMetadata: TableColumnMetadata =
                    model.getTableColumnMetadata(key);

                if (
                    tableColumnMetadata &&
                    tableColumnMetadata.modelType &&
                    tableColumnMetadata.type === TableColumnType.Entity &&
                    valuesToSend[key] &&
                    typeof valuesToSend[key] === Typeof.String
                ) {
                    const baseModel: BaseModel =
                        new tableColumnMetadata.modelType();
                    baseModel._id = valuesToSend[key] as string;
                    valuesToSend[key] = baseModel;
                }

                if (
                    tableColumnMetadata &&
                    tableColumnMetadata.modelType &&
                    tableColumnMetadata.type === TableColumnType.EntityArray &&
                    Array.isArray(valuesToSend[key]) &&
                    (valuesToSend[key] as Array<any>).length > 0 &&
                    typeof (valuesToSend[key] as Array<any>)[0] ===
                        Typeof.String
                ) {
                    const arr: Array<BaseModel> = [];
                    for (const id of valuesToSend[key] as Array<string>) {
                        const baseModel: BaseModel =
                            new tableColumnMetadata.modelType();
                        baseModel._id = id as string;
                        arr.push(baseModel);
                    }
                    valuesToSend[key] = arr;
                }
            }

            let tBaseModel: TBaseModel = model.fromJSON(
                valuesToSend,
                props.modelType
            );

            if (props.onBeforeCreate && props.formType === FormType.Create) {
                tBaseModel = await props.onBeforeCreate(tBaseModel);
            }

            result = await ModelAPI.createOrUpdate<TBaseModel>(
                tBaseModel,
                props.modelType,
                props.formType,
                props.apiUrl,
                miscDataProps,
                props.saveRequestOptions
            );

            if (props.onSuccess) {
                props.onSuccess(result.data);
            }
        } catch (err) {
            setError(
                (err as HTTPErrorResponse).message ||
                    'Server Error. Please try again'
            );
        }

        setLoading(false);

        if (props.onLoadingChange) {
            props.onLoadingChange(false);
        }
    };

    if (isFetching || isFetchingDropdownOptions) {
        return (
            <div
                className="row text-center"
                style={{
                    marginTop: '50px',
                    marginBottom: '50px',
                }}
            >
                <Loader
                    loaderType={LoaderType.Bar}
                    color={VeryLightGrey}
                    size={200}
                />
            </div>
        );
    }

    return (
        <BasicModelForm<TBaseModel>
            title={props.title}
            description={props.description}
            model={model}
            id={props.id}
            fields={fields}
            showAsColumns={props.showAsColumns}
            footer={props.footer}
            isLoading={isLoading}
            submitButtonText={props.submitButtonText}
            cancelButtonText={props.cancelButtonText}
            onSubmit={onSubmit}
            onValidate={props.onValidate}
            onCancel={props.onCancel}
            maxPrimaryButtonWidth={props.maxPrimaryButtonWidth}
            error={error}
            hideSubmitButton={props.hideSubmitButton}
            formRef={props.formRef}
            initialValues={itemToEdit || props.initialValues}
        ></BasicModelForm>
    );
};

export default ModelForm;
