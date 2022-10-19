import BaseModel from 'Common/Models/BaseModel';
import HTTPErrorResponse from 'Common/Types/API/HTTPErrorResponse';
import ObjectID from 'Common/Types/ObjectID';
import React, { ReactElement, useState } from 'react';
import ModelAPI from '../../Utils/ModelAPI/ModelAPI';
import { ButtonStyleType } from '../Button/Button';
import Card from '../Card/Card';
import { IconProp } from '../Icon/Icon';
import ConfirmModal from '../Modal/ConfirmModal';

export interface ComponentProps<TBaseModel extends BaseModel> {
    modelType: { new (): TBaseModel };
    modelId: ObjectID;
    onDeleteSuccess: () => void;
}

const ModelDelete: Function = <TBaseModel extends BaseModel>(
    props: ComponentProps<TBaseModel>
): ReactElement => {
    const model: TBaseModel = new props.modelType();
    const [showModal, setShowModal] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [showErrorModal, setShowErrorModal] = useState<boolean>(false);

    const deleteItem: Function = async () => {
        setIsLoading(true);
        try {
            await ModelAPI.deleteItem<TBaseModel>(
                props.modelType,
                props.modelId
            );
            props.onDeleteSuccess && props.onDeleteSuccess();
        } catch (err) {
            try {
                setError(
                    (err as HTTPErrorResponse).message ||
                        'Server Error. Please try again'
                );
            } catch (e) {
                setError('Server Error. Please try again');
            }
            setShowErrorModal(true);
        }

        setIsLoading(false);
    };

    return (
        <>
            <Card
                title={`Delete ${model.singularName}`}
                description={`Are you sure you want to delete this ${model.singularName?.toLowerCase()}?`}
                buttons={[
                    {
                        title: `Delete ${model.singularName}`,
                        buttonStyle: ButtonStyleType.DANGER,
                        onClick: () => {
                            setShowModal(true);
                        },
                        isLoading: isLoading,
                        icon: IconProp.Trash,
                    },
                ]}
            />

            {showModal ? (
                <ConfirmModal
                    description={`Are you sure you want to delete this ${model.singularName?.toLowerCase()}?`}
                    title={`Delete ${model.singularName}`}
                    onSubmit={() => {
                        setShowModal(false);
                        deleteItem();
                    }}
                    onClose={() => {
                        setShowModal(false);
                    }}
                    submitButtonText={`Delete ${model.singularName}`}
                    submitButtonType={ButtonStyleType.DANGER}
                />
            ) : (
                <></>
            )}

            {showErrorModal ? (
                <ConfirmModal
                    description={error}
                    title={`Delete Error`}
                    onSubmit={() => {
                        setShowErrorModal(false);
                        setError('');
                    }}
                    submitButtonText={`Close`}
                    submitButtonType={ButtonStyleType.NORMAL}
                />
            ) : (
                <></>
            )}
        </>
    );
};

export default ModelDelete;
