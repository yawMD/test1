import BaseModel from 'Common/Models/BaseModel';
import React, { ReactElement, useEffect, useState } from 'react';
import Columns from './Columns';
import Table from '../Table/Table';
import TableColumn from '../Table/Types/Column';
import { JSONObject } from 'Common/Types/JSON';
import Card, {
    CardButtonSchema,
    ComponentProps as CardComponentProps,
} from '../Card/Card';
import ModelAPI, {
    ListResult,
    RequestOptions,
} from '../../Utils/ModelAPI/ModelAPI';
import Select from '../../Utils/ModelAPI/Select';
import HTTPErrorResponse from 'Common/Types/API/HTTPErrorResponse';
import { ButtonStyleType } from '../Button/Button';
import ModelFormModal from '../ModelFormModal/ModelFormModal';
import { IconProp } from '../Icon/Icon';
import { FormType } from '../Forms/ModelForm';
import Fields from '../Forms/Types/Fields';
import SortOrder from 'Common/Types/Database/SortOrder';
import FieldType from '../Types/FieldType';
import Dictionary from 'Common/Types/Dictionary';
import ActionButtonSchema from '../ActionButton/ActionButtonSchema';
import ObjectID from 'Common/Types/ObjectID';
import ConfirmModal from '../Modal/ConfirmModal';
import Permission, {
    PermissionHelper,
    UserPermission,
} from 'Common/Types/Permission';
import PermissionUtil from '../../Utils/Permission';
import { ColumnAccessControl } from 'Common/Types/Database/AccessControl/AccessControl';
import Query from '../../Utils/ModelAPI/Query';
import Search from 'Common/Types/Database/Search';
import Typeof from 'Common/Types/Typeof';
import Navigation from '../../Utils/Navigation';
import Route from 'Common/Types/API/Route';
import BadDataException from 'Common/Types/Exception/BadDataException';
import Populate from '../../Utils/ModelAPI/Populate';
import List from '../List/List';
import OrderedStatesList from '../OrderedStatesList/OrderedStatesList';
import Field from '../Detail/Field';
import FormValues from '../Forms/Types/FormValues';
import { FilterData } from '../Table/TableHeader';
import ModelTableColumn from './Column';
import { Logger } from '../../Utils/Logger';
import { LIMIT_PER_PROJECT } from 'Common/Types/Database/LimitMax';
import InBetween from 'Common/Types/Database/InBetween';

export enum ShowTableAs {
    Table,
    List,
    OrderedStatesList,
}

export interface ComponentProps<TBaseModel extends BaseModel> {
    modelType: { new (): TBaseModel };
    id: string;
    onFetchInit?:
        | undefined
        | ((pageNumber: number, itemsOnPage: number) => void);
    onFetchSuccess?:
        | undefined
        | ((data: Array<TBaseModel>, totalCount: number) => void);
    cardProps?: CardComponentProps | undefined;
    columns: Columns<TBaseModel>;
    selectMoreFields?: Select<TBaseModel>;
    initialItemsOnPage?: number;
    isDeleteable: boolean;
    isEditable: boolean;
    isCreateable: boolean;
    disablePagination?: undefined | boolean;
    formFields?: undefined | Fields<TBaseModel>;
    noItemsMessage?: undefined | string;
    showRefreshButton?: undefined | boolean;
    showFilterButton?: undefined | boolean;
    isViewable?: undefined | boolean;
    enableDragAndDrop?: boolean | undefined;
    viewPageRoute?: undefined | Route;
    onViewPage?: (item: TBaseModel) => Promise<Route>;
    query?: Query<TBaseModel>;
    onBeforeFetch?: (() => Promise<JSONObject>) | undefined;
    createInitialValues?: FormValues<TBaseModel> | undefined;
    onBeforeCreate?: ((item: TBaseModel) => Promise<TBaseModel>) | undefined;
    createVerb?: string;
    showTableAs?: ShowTableAs | undefined;
    singularName?: string | undefined;
    pluralName?: string | undefined;
    actionButtons?: Array<ActionButtonSchema> | undefined;
    deleteButtonText?: string | undefined;
    editButtonText?: string | undefined;
    viewButtonText?: string | undefined;
    refreshToggle?: boolean | undefined;
    fetchRequestOptions?: RequestOptions | undefined;
    deleteRequestOptions?: RequestOptions | undefined;
    onItemDeleted?: ((item: TBaseModel) => void) | undefined;
    onBeforeEdit?: ((item: TBaseModel) => Promise<TBaseModel>) | undefined;
    onBeforeDelete?: ((item: TBaseModel) => Promise<TBaseModel>) | undefined;
    onBeforeView?: ((item: TBaseModel) => Promise<TBaseModel>) | undefined;
    sortBy?: string | undefined;
    sortOrder?: SortOrder | undefined;
    dragDropIdField?: string | undefined;
    dragDropIndexField?: string | undefined;
    orderedStatesListProps?: {
        titleField: string;
        descriptionField?: string | undefined;
        orderField: string;
        shouldAddItemInTheEnd?: boolean;
        shouldAddItemInTheBegining?: boolean;
    };
    onViewComplete: (item: TBaseModel) => void;
}

enum ModalType {
    Create,
    Edit,
}

const ModelTable: Function = <TBaseModel extends BaseModel>(
    props: ComponentProps<TBaseModel>
): ReactElement => {
    let showTableAs: ShowTableAs | undefined = props.showTableAs;

    if (!showTableAs) {
        showTableAs = ShowTableAs.Table;
    }

    const [tableColumns, setColumns] = useState<Array<TableColumn>>([]);
    const [cardButtons, setCardButtons] = useState<Array<CardButtonSchema>>([]);
    const model: TBaseModel = new props.modelType();
    const [actionButtonSchema, setActionButtonSchema] = useState<
        Array<ActionButtonSchema>
    >([]);

    const [orderedStatesListNewItemOrder, setOrderedStatesListNewItemOrder] =
        useState<number | null>(null);

    const [onBeforeFetchData, setOnBeforeFetchData] = useState<
        JSONObject | undefined
    >(undefined);
    const [data, setData] = useState<Array<TBaseModel>>([]);
    const [query, setQuery] = useState<Query<TBaseModel>>({});
    const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
    const [totalItemsCount, setTotalItemsCount] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [error, setError] = useState<string>('');
    const [tableFilterError, setTableFilterError] = useState<string>('');

    const [showModel, setShowModal] = useState<boolean>(false);
    const [showTableFilter, setShowTableFilter] = useState<boolean>(false);
    const [modalType, setModalType] = useState<ModalType>(ModalType.Create);
    const [sortBy, setSortBy] = useState<string>(props.sortBy || '');
    const [sortOrder, setSortOrder] = useState<SortOrder>(
        props.sortOrder || SortOrder.Ascending
    );
    const [showDeleteConfirmModal, setShowDeleteConfirmModal] =
        useState<boolean>(false);
    const [currentEditableItem, setCurrentEditableItem] =
        useState<JSONObject | null>(null);
    const [currentDeleteableItem, setCurrentDeleteableItem] =
        useState<JSONObject | null>(null);

    const [itemsOnPage, setItemsOnPage] = useState<number>(
        props.initialItemsOnPage || 10
    );

    const [fields, setFields] = useState<Array<Field>>([]);

    const [isTableFilterFetchLoading, setIsTableFilterFetchLoading] =
        useState(false);

    useEffect(() => {
        const detailFields: Array<Field> = [];
        for (const column of tableColumns) {
            if (!column.key) {
                // if its an action column, ignore.
                continue;
            }

            detailFields.push({
                title: column.title,
                description: column.description || '',
                key: column.key || '',
                fieldType: column.type,
                getElement: column.getElement
                    ? (item: JSONObject): ReactElement => {
                          return column.getElement!(item, onBeforeFetchData);
                      }
                    : undefined,
            });

            setFields(detailFields);
        }
    }, [tableColumns]);

    const deleteItem: Function = async (item: TBaseModel) => {
        if (!item.id) {
            throw new BadDataException('item.id cannot be null');
        }

        setIsLoading(true);

        try {
            await ModelAPI.deleteItem<TBaseModel>(
                props.modelType,
                item.id,
                props.deleteRequestOptions
            );

            props.onItemDeleted && props.onItemDeleted(item);

            if (data.length === 1 && currentPageNumber > 1) {
                setCurrentPageNumber(currentPageNumber - 1);
            }
            await fetchItems();
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

        setIsLoading(false);
    };

    const getFilterDropdownItems: Function = async () => {
        setTableFilterError('');
        setIsTableFilterFetchLoading(true);

        const classicColumns: Array<TableColumn> = [...tableColumns];

        try {
            for (const column of props.columns) {
                const key: string | null = getColumnKey(column);

                const classicColumn: TableColumn | undefined =
                    classicColumns.find((i: TableColumn) => {
                        return i.key === key;
                    });

                if (!classicColumn) {
                    continue;
                }

                if (!key) {
                    continue;
                }

                if (
                    !(
                        column.type === FieldType.Entity ||
                        column.type === FieldType.EntityArray
                    )
                ) {
                    continue;
                }

                if (!column.isFilterable) {
                    continue;
                }

                if (!column.filterEntityType) {
                    Logger.warn(
                        `Cannot filter on ${key} because column.filterEntityType is not set.`
                    );
                    continue;
                }

                if (!column.filterDropdownField) {
                    Logger.warn(
                        `Cannot filter on ${key} because column.dropdownField is not set.`
                    );
                    continue;
                }

                const hasPermission: boolean =
                    hasPermissionToReadColumn(column);

                if (!hasPermission) {
                    continue;
                }

                const query: Query<BaseModel> = column.filterQuery || {};

                const listResult: ListResult<BaseModel> =
                    await ModelAPI.getList<BaseModel>(
                        column.filterEntityType,
                        query,
                        LIMIT_PER_PROJECT,
                        0,
                        {
                            [column.filterDropdownField.label]: true,
                            [column.filterDropdownField.value]: true,
                        },
                        {},
                        {}
                    );

                classicColumn.filterDropdownOptions = [];
                for (const item of listResult.data) {
                    classicColumn.filterDropdownOptions.push({
                        value: item.getColumnValue(
                            column.filterDropdownField.value
                        ) as string,
                        label: item.getColumnValue(
                            column.filterDropdownField.label
                        ) as string,
                    });
                }
            }

            setColumns(classicColumns);
        } catch (err) {
            try {
                setTableFilterError(
                    (err as HTTPErrorResponse).message ||
                        'Server Error. Please try again'
                );
            } catch (e) {
                setTableFilterError('Server Error. Please try again');
            }
        }

        setIsTableFilterFetchLoading(false);
    };

    const fetchItems: Function = async () => {
        if (isLoading) {
            return;
        }

        setError('');
        setIsLoading(true);

        if (props.onFetchInit) {
            props.onFetchInit(currentPageNumber, itemsOnPage);
        }

        if (props.onBeforeFetch) {
            const jobject: JSONObject = await props.onBeforeFetch();
            setOnBeforeFetchData(jobject);
        }

        try {
            const listResult: ListResult<TBaseModel> =
                await ModelAPI.getList<TBaseModel>(
                    props.modelType,
                    {
                        ...query,
                        ...props.query,
                    },
                    itemsOnPage,
                    (currentPageNumber - 1) * itemsOnPage,
                    getSelect(),
                    sortBy
                        ? {
                              [sortBy as any]: sortOrder,
                          }
                        : {},
                    getPopulate(),
                    props.fetchRequestOptions
                );

            setTotalItemsCount(listResult.count);
            setData(listResult.data);
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

        setIsLoading(false);
    };

    useEffect(() => {
        if (showTableFilter) {
            getFilterDropdownItems();
        }
    }, [showTableFilter]);

    useEffect(() => {
        fetchItems();
    }, [props.refreshToggle]);

    const getSelect: Function = (): Select<TBaseModel> => {
        const selectFields: Select<TBaseModel> = {
            _id: true,
        };

        for (const column of props.columns || []) {
            const key: string | null = column.field
                ? (Object.keys(column.field)[0] as string)
                : null;

            if (key) {
                if (model.getTableColumnMetadata(key)) {
                    (selectFields as Dictionary<boolean>)[key] = true;
                } else {
                    throw new BadDataException(
                        `${key} column not found on ${model.singularName}`
                    );
                }
            }
        }

        const selectMoreFields: Array<string> = props.selectMoreFields
            ? Object.keys(props.selectMoreFields)
            : [];

        if (props.dragDropIndexField) {
            selectMoreFields.push(props.dragDropIndexField);
        }

        if (
            props.dragDropIdField &&
            !Object.keys(selectFields).includes(props.dragDropIdField) &&
            !selectMoreFields.includes(props.dragDropIdField)
        ) {
            selectMoreFields.push(props.dragDropIdField);
        }

        for (const moreField of selectMoreFields) {
            if (model.getTableColumnMetadata(moreField)) {
                (selectFields as Dictionary<boolean>)[moreField] = true;
            } else {
                throw new BadDataException(
                    `${moreField} column not found on ${model.singularName}`
                );
            }
        }

        return selectFields;
    };

    const getPopulate: Function = (): Populate<TBaseModel> => {
        const populate: Populate<TBaseModel> = {};

        for (const column of props.columns || []) {
            const key: string | null = column.field
                ? (Object.keys(column.field)[0] as string)
                : null;

            if (key && model.isFileColumn(key)) {
                (populate as JSONObject)[key] = {
                    file: true,
                    _id: true,
                    type: true,
                    name: true,
                };
            } else if (key && model.isEntityColumn(key)) {
                (populate as JSONObject)[key] = (column.field as any)[key];
            }
        }

        return populate;
    };

    const setHeaderButtons: Function = (): void => {
        // add header buttons.
        const headerbuttons: Array<CardButtonSchema> = [];

        const permissions: Array<Permission> | null =
            PermissionUtil.getAllPermissions();

        let hasPermissionToCreate: boolean = false;

        if (permissions) {
            hasPermissionToCreate = model.hasCreatePermissions(permissions);
        }

        // because ordered list add button is inside the table and not on the card header.
        if (
            props.isCreateable &&
            hasPermissionToCreate &&
            showTableAs !== ShowTableAs.OrderedStatesList
        ) {
            headerbuttons.push({
                title: `${props.createVerb || 'Create'} ${
                    props.singularName || model.singularName
                }`,
                buttonStyle: ButtonStyleType.OUTLINE,
                onClick: () => {
                    setModalType(ModalType.Create);
                    setShowModal(true);
                },
                icon: IconProp.Add,
            });
        }

        if (props.showRefreshButton) {
            headerbuttons.push({
                title: '',
                buttonStyle: ButtonStyleType.OUTLINE,
                onClick: () => {
                    fetchItems();
                },
                disabled: isLoading,
                icon: IconProp.Refresh,
            });
        }

        if (props.showFilterButton) {
            headerbuttons.push({
                title: '',
                buttonStyle: ButtonStyleType.OUTLINE,
                onClick: () => {
                    const newValue: boolean = !showTableFilter;
                    if (!newValue) {
                        setQuery({});
                    }
                    setShowTableFilter(newValue);
                },
                disabled: isLoading,
                icon: IconProp.Filter,
            });
        }

        setCardButtons(headerbuttons);
    };

    useEffect(() => {
        fetchItems();
    }, [currentPageNumber, sortBy, sortOrder, itemsOnPage, query]);

    useEffect(() => {
        setHeaderButtons();
    }, [showTableFilter]);

    const shouldDisableSort: Function = (columnName: string): boolean => {
        return model.isEntityColumn(columnName);
    };

    const getColumnKey: Function = (
        column: ModelTableColumn<TBaseModel>
    ): string | null => {
        const key: string | null = column.field
            ? (Object.keys(column.field)[0] as string)
            : null;

        return key;
    };

    const hasPermissionToReadColumn: Function = (
        column: ModelTableColumn<TBaseModel>
    ): boolean => {
        const accessControl: Dictionary<ColumnAccessControl> =
            model.getColumnAccessControlForAllColumns();

        const userPermissions: Array<Permission> = getUserPermissions();

        const key: string | null = getColumnKey(column);

        // check permissions.
        let hasPermission: boolean = false;

        if (!key) {
            hasPermission = true;
        }

        if (key) {
            hasPermission = true;
            let fieldPermissions: Array<Permission> = [];
            fieldPermissions = accessControl[key as string]?.read || [];

            if (
                accessControl[key]?.read &&
                !PermissionHelper.doesPermissionsIntersect(
                    userPermissions,
                    fieldPermissions
                )
            ) {
                hasPermission = false;
            }
        }

        return hasPermission;
    };

    const getUserPermissions: Function = (): Array<Permission> => {
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

        return userPermissions;
    };

    useEffect(() => {
        // Convert ModelColumns to TableColumns.

        const columns: Array<TableColumn> = [];

        const selectFields: Select<TBaseModel> = {
            _id: true,
        };

        const slugifyColumn: string | null = model.getSlugifyColumn();

        if (slugifyColumn) {
            (selectFields as Dictionary<boolean>)[slugifyColumn] = true;
        }

        const userPermissions: Array<Permission> = getUserPermissions();

        const accessControl: Dictionary<ColumnAccessControl> =
            model.getColumnAccessControlForAllColumns();

        for (const column of props.columns || []) {
            const hasPermission: boolean = hasPermissionToReadColumn(column);
            const key: string | null = getColumnKey(column);

            if (hasPermission) {
                columns.push({
                    ...column,
                    disableSort: column.disableSort || shouldDisableSort(key),
                    key: column.selectedProperty
                        ? key + '.' + column.selectedProperty
                        : key,
                });

                if (key) {
                    (selectFields as Dictionary<boolean>)[key] = true;
                }
            }
        }

        const selectMoreFields: Array<string> = props.selectMoreFields
            ? Object.keys(props.selectMoreFields)
            : [];

        for (const moreField of selectMoreFields) {
            let hasPermissionToSelectField: boolean = true;
            let fieldPermissions: Array<Permission> = [];
            fieldPermissions = accessControl[moreField as string]?.read || [];

            if (
                accessControl[moreField]?.read &&
                !PermissionHelper.doesPermissionsIntersect(
                    userPermissions,
                    fieldPermissions
                )
            ) {
                hasPermissionToSelectField = false;
            }

            if (hasPermissionToSelectField) {
                (selectFields as Dictionary<boolean>)[moreField] = true;
            } else {
                Logger.warn(
                    'User does not have read permissions to read - ' + moreField
                );
            }
        }

        const permissions: Array<Permission> | null =
            PermissionUtil.getAllPermissions();

        if (
            permissions &&
            ((props.isDeleteable && model.hasDeletePermissions(permissions)) ||
                (props.isEditable && model.hasUpdatePermissions(permissions)) ||
                (props.isViewable && model.hasReadPermissions(permissions)))
        ) {
            columns.push({
                title: 'Actions',
                type: FieldType.Actions,
            });
        }

        setActionSchema();
        setHeaderButtons();
        setColumns(columns);
    }, []);

    const setActionSchema: Function = () => {
        const permissions: Array<Permission> =
            PermissionUtil.getAllPermissions();

        const actionsSchema: Array<ActionButtonSchema> = [];

        // add actions buttons from props.
        if (props.actionButtons) {
            for (const moreSchema of props.actionButtons) {
                actionsSchema.push(moreSchema);
            }
        }

        if (permissions) {
            if (props.isViewable && model.hasReadPermissions(permissions)) {
                actionsSchema.push({
                    title: props.viewButtonText || 'View',
                    buttonStyleType: ButtonStyleType.OUTLINE,
                    onClick: async (
                        item: JSONObject,
                        onCompleteAction: Function,
                        onError: (err: Error) => void
                    ) => {
                        try {
                            const baseModel: TBaseModel =
                                BaseModel.fromJSONObject(item, props.modelType);

                            if (props.onBeforeView) {
                                item = BaseModel.toJSONObject(
                                    await props.onBeforeView(baseModel),
                                    props.modelType
                                );
                            }

                            if (props.onViewPage) {
                                const route: Route = await props.onViewPage(
                                    baseModel
                                );

                                onCompleteAction();
                                if (props.onViewComplete) {
                                    props.onViewComplete(baseModel);
                                }
                                return Navigation.navigate(route);
                            }

                            if (!props.viewPageRoute) {
                                throw new BadDataException(
                                    'Please populate curentPageRoute in ModelTable'
                                );
                            }

                            onCompleteAction();
                            if (props.onViewComplete) {
                                props.onViewComplete(baseModel);
                            }
                            return Navigation.navigate(
                                new Route(
                                    props.viewPageRoute.toString()
                                ).addRoute('/' + item['_id'])
                            );
                        } catch (err) {
                            onError(err as Error);
                        }
                    },
                });
            }

            if (props.isEditable && model.hasUpdatePermissions(permissions)) {
                actionsSchema.push({
                    title: props.editButtonText || 'Edit',
                    buttonStyleType: ButtonStyleType.NORMAL,
                    onClick: async (
                        item: JSONObject,
                        onCompleteAction: Function,
                        onError: (err: Error) => void
                    ) => {
                        try {
                            if (props.onBeforeEdit) {
                                item = BaseModel.toJSONObject(
                                    await props.onBeforeEdit(
                                        BaseModel.fromJSONObject(
                                            item,
                                            props.modelType
                                        )
                                    ),
                                    props.modelType
                                );
                            }

                            setModalType(ModalType.Edit);
                            setShowModal(true);
                            setCurrentEditableItem(item);

                            onCompleteAction();
                        } catch (err) {
                            onError(err as Error);
                        }
                    },
                });
            }

            if (props.isDeleteable && model.hasDeletePermissions(permissions)) {
                actionsSchema.push({
                    title: props.deleteButtonText || 'Delete',
                    icon: IconProp.Trash,
                    buttonStyleType: ButtonStyleType.DANGER_OUTLINE,
                    onClick: async (
                        item: JSONObject,
                        onCompleteAction: Function,
                        onError: (err: Error) => void
                    ) => {
                        try {
                            if (props.onBeforeDelete) {
                                item = BaseModel.toJSONObject(
                                    await props.onBeforeDelete(
                                        BaseModel.fromJSONObject(
                                            item,
                                            props.modelType
                                        )
                                    ),
                                    props.modelType
                                );
                            }

                            setShowDeleteConfirmModal(true);
                            setCurrentDeleteableItem(item);
                            onCompleteAction();
                        } catch (err) {
                            onError(err as Error);
                        }
                    },
                });
            }
        }

        setActionButtonSchema(actionsSchema);
    };

    const getTable: Function = (): ReactElement => {
        return (
            <Table
                onFilterChanged={(filterData: FilterData) => {
                    const query: Query<TBaseModel> = {};

                    for (const key in filterData) {
                        if (
                            filterData[key] &&
                            typeof filterData[key] === Typeof.String
                        ) {
                            query[key as keyof TBaseModel] = (
                                filterData[key] || ''
                            ).toString();
                        }

                        if (typeof filterData[key] === Typeof.Boolean) {
                            query[key as keyof TBaseModel] = Boolean(
                                filterData[key]
                            );
                        }

                        if (filterData[key] instanceof Date) {
                            query[key as keyof TBaseModel] = filterData[key];
                        }

                        if (filterData[key] instanceof Search) {
                            query[key as keyof TBaseModel] = filterData[key];
                        }

                        if (filterData[key] instanceof InBetween) {
                            query[key as keyof TBaseModel] = filterData[key];
                        }

                        if (Array.isArray(filterData[key])) {
                            query[key as keyof TBaseModel] = filterData[key];
                        }
                    }

                    setQuery(query);
                }}
                onSortChanged={(sortBy: string, sortOrder: SortOrder) => {
                    setSortBy(sortBy);
                    setSortOrder(sortOrder);
                }}
                onTableFilterRefreshClick={() => {
                    getFilterDropdownItems();
                }}
                singularLabel={
                    props.singularName || model.singularName || 'Item'
                }
                pluralLabel={props.pluralName || model.pluralName || 'Items'}
                error={error}
                currentPageNumber={currentPageNumber}
                isLoading={isLoading}
                enableDragAndDrop={props.enableDragAndDrop}
                dragDropIdField={'_id'}
                dragDropIndexField={props.dragDropIndexField}
                totalItemsCount={totalItemsCount}
                data={BaseModel.toJSONObjectArray(data, props.modelType)}
                filterError={tableFilterError}
                id={props.id}
                columns={tableColumns}
                itemsOnPage={itemsOnPage}
                onDragDrop={async (id: string, newOrder: number) => {
                    if (!props.dragDropIndexField) {
                        return;
                    }

                    setIsLoading(true);

                    await ModelAPI.updateById(
                        props.modelType,
                        new ObjectID(id),
                        {
                            [props.dragDropIndexField]: newOrder,
                        }
                    );

                    fetchItems();
                }}
                disablePagination={props.disablePagination || false}
                isTableFilterLoading={isTableFilterFetchLoading}
                onNavigateToPage={async (
                    pageNumber: number,
                    itemsOnPage: number
                ) => {
                    setCurrentPageNumber(pageNumber);
                    setItemsOnPage(itemsOnPage);
                }}
                showFilter={showTableFilter}
                noItemsMessage={props.noItemsMessage || ''}
                onRefreshClick={() => {
                    fetchItems();
                }}
                actionButtons={actionButtonSchema}
            />
        );
    };

    const getOrderedStatesList: Function = (): ReactElement => {
        if (!props.orderedStatesListProps) {
            throw new BadDataException(
                'props.orderedStatesListProps required when showTableAs === ShowTableAs.OrderedStatesList'
            );
        }

        let getTitleElement:
            | ((
                  item: JSONObject,
                  onBeforeFetchData?: JSONObject | undefined
              ) => ReactElement)
            | undefined = undefined;
        let getDescriptionElement:
            | ((item: JSONObject) => ReactElement)
            | undefined = undefined;

        for (const column of props.columns) {
            const key: string | undefined = Object.keys(
                column.field as Object
            )[0];

            if (key === props.orderedStatesListProps.titleField) {
                getTitleElement = column.getElement;
            }

            if (key === props.orderedStatesListProps.descriptionField) {
                getDescriptionElement = column.getElement;
            }
        }

        return (
            <OrderedStatesList
                error={error}
                isLoading={isLoading}
                data={BaseModel.toJSONObjectArray(data, props.modelType)}
                id={props.id}
                titleField={props.orderedStatesListProps?.titleField || ''}
                descriptionField={
                    props.orderedStatesListProps?.descriptionField || ''
                }
                orderField={props.orderedStatesListProps?.orderField || ''}
                shouldAddItemInTheBegining={
                    props.orderedStatesListProps.shouldAddItemInTheBegining
                }
                shouldAddItemInTheEnd={
                    props.orderedStatesListProps.shouldAddItemInTheEnd
                }
                noItemsMessage={props.noItemsMessage || ''}
                onRefreshClick={() => {
                    fetchItems();
                }}
                onCreateNewItem={
                    props.isCreateable
                        ? (order: number) => {
                              setOrderedStatesListNewItemOrder(order);
                              setModalType(ModalType.Create);
                              setShowModal(true);
                          }
                        : undefined
                }
                singularLabel={
                    props.singularName || model.singularName || 'Item'
                }
                actionButtons={actionButtonSchema}
                getTitleElement={getTitleElement}
                getDescriptionElement={getDescriptionElement}
            />
        );
    };

    const getList: Function = (): ReactElement => {
        return (
            <List
                singularLabel={
                    props.singularName || model.singularName || 'Item'
                }
                pluralLabel={props.pluralName || model.pluralName || 'Items'}
                error={error}
                currentPageNumber={currentPageNumber}
                isLoading={isLoading}
                totalItemsCount={totalItemsCount}
                data={BaseModel.toJSONObjectArray(data, props.modelType)}
                id={props.id}
                fields={fields}
                itemsOnPage={itemsOnPage}
                disablePagination={props.disablePagination || false}
                onNavigateToPage={async (
                    pageNumber: number,
                    itemsOnPage: number
                ) => {
                    setCurrentPageNumber(pageNumber);
                    setItemsOnPage(itemsOnPage);
                }}
                noItemsMessage={props.noItemsMessage || ''}
                onRefreshClick={() => {
                    fetchItems();
                }}
                actionButtons={actionButtonSchema}
            />
        );
    };

    const getCardComponent: Function = (): ReactElement => {
        if (showTableAs === ShowTableAs.List) {
            return (
                <div>
                    {props.cardProps && (
                        <Card
                            {...props.cardProps}
                            cardBodyStyle={{ padding: '0px' }}
                            buttons={cardButtons}
                        >
                            {getList()}
                        </Card>
                    )}

                    {!props.cardProps && getList()}
                </div>
            );
        } else if (showTableAs === ShowTableAs.Table) {
            return (
                <div>
                    {props.cardProps && (
                        <Card
                            {...props.cardProps}
                            cardBodyStyle={{ padding: '0px' }}
                            buttons={cardButtons}
                        >
                            {getTable()}
                        </Card>
                    )}

                    {!props.cardProps && getTable()}
                </div>
            );
        }

        return (
            <div>
                {props.cardProps && (
                    <Card
                        {...props.cardProps}
                        cardBodyStyle={{ padding: '0px' }}
                        buttons={cardButtons}
                    >
                        {getOrderedStatesList()}
                    </Card>
                )}

                {!props.cardProps && getOrderedStatesList()}
            </div>
        );
    };

    return (
        <>
            {getCardComponent()}

            {showModel ? (
                <ModelFormModal<TBaseModel>
                    title={
                        modalType === ModalType.Create
                            ? `${props.createVerb || 'Create'} New ${
                                  props.singularName || model.singularName
                              }`
                            : `Edit ${props.singularName || model.singularName}`
                    }
                    initialValues={
                        modalType === ModalType.Create
                            ? props.createInitialValues
                            : undefined
                    }
                    onClose={() => {
                        setShowModal(false);
                    }}
                    submitButtonText={
                        modalType === ModalType.Create
                            ? `${props.createVerb || 'Create'} ${
                                  props.singularName || model.singularName
                              }`
                            : `Save Changes`
                    }
                    onSuccess={(_item: TBaseModel) => {
                        setShowModal(false);
                        setCurrentPageNumber(1);
                        fetchItems();
                    }}
                    onBeforeCreate={async (item: TBaseModel) => {
                        if (
                            showTableAs === ShowTableAs.OrderedStatesList &&
                            props.orderedStatesListProps?.orderField &&
                            orderedStatesListNewItemOrder
                        ) {
                            item.setColumnValue(
                                props.orderedStatesListProps.orderField,
                                orderedStatesListNewItemOrder
                            );
                        }

                        if (props.onBeforeCreate) {
                            item = await props.onBeforeCreate(item);
                        }

                        return item;
                    }}
                    modelType={props.modelType}
                    formProps={{
                        model: model,
                        id: `create-${props.modelType.name}-from`,
                        fields: props.formFields || [],
                        formType:
                            modalType === ModalType.Create
                                ? FormType.Create
                                : FormType.Update,
                        type: props.modelType,
                    }}
                    modelIdToEdit={
                        currentEditableItem
                            ? new ObjectID(currentEditableItem['_id'] as string)
                            : undefined
                    }
                />
            ) : (
                <></>
            )}

            {showDeleteConfirmModal && (
                <ConfirmModal
                    title={`Delete ${props.singularName || model.singularName}`}
                    description={`Are you sure you want to delete this ${(
                        props.singularName ||
                        model.singularName ||
                        'item'
                    )?.toLowerCase()}?`}
                    onClose={() => {
                        setShowDeleteConfirmModal(false);
                    }}
                    submitButtonText={'Delete'}
                    onSubmit={() => {
                        if (
                            currentDeleteableItem &&
                            currentDeleteableItem['_id']
                        ) {
                            deleteItem(
                                BaseModel.fromJSON(
                                    currentDeleteableItem,
                                    props.modelType
                                )
                            );
                            setShowDeleteConfirmModal(false);
                        }
                    }}
                    submitButtonType={ButtonStyleType.DANGER}
                />
            )}
        </>
    );
};

export default ModelTable;
