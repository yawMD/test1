import FormFieldSchemaType from 'CommonUI/src/Components/Forms/Types/FormFieldSchemaType';
import { IconProp } from 'CommonUI/src/Components/Icon/Icon';
import FieldType from 'CommonUI/src/Components/Types/FieldType';
import React, { FunctionComponent, ReactElement } from 'react';
import Incident from 'Model/Models/Incident';
import ModelTable from 'CommonUI/src/Components/ModelTable/ModelTable';
import MonitorStatus from 'Model/Models/MonitorStatus';
import { JSONArray, JSONObject } from 'Common/Types/JSON';
import Pill from 'CommonUI/src/Components/Pill/Pill';
import Color from 'Common/Types/Color';
import Monitor from 'Model/Models/Monitor';
import MonitorsElement from '../../Components/Monitor/Monitors';
import IncidentState from 'Model/Models/IncidentState';
import Label from 'Model/Models/Label';
import LabelsElement from '../../Components/Label/Labels';
import IncidentSeverity from 'Model/Models/IncidentSeverity';
import Query from 'CommonUI/src/Utils/ModelAPI/Query';
import Route from 'Common/Types/API/Route';
import Project from 'Model/Models/Project';

export interface ComponentProps {
    query?: Query<Incident> | undefined;
    viewPageRoute?: Route;
    currentProject?: Project | undefined;
    noItemsMessage?: string | undefined;
    title?: string | undefined;
    description?: string | undefined;
}

const IncidentsTable: FunctionComponent<ComponentProps> = (
    props: ComponentProps
): ReactElement => {
    return (
        <ModelTable<Incident>
            modelType={Incident}
            id="incidents-table"
            isDeleteable={false}
            query={props.query}
            isEditable={false}
            isCreateable={true}
            isViewable={true}
            cardProps={{
                icon: IconProp.Alert,
                title: props.title || 'Incidents',
                description:
                    props.description ||
                    'Here is a list of incidents for this project.',
            }}
            noItemsMessage={props.noItemsMessage || 'No incidents found.'}
            formFields={[
                {
                    field: {
                        title: true,
                    },
                    title: 'Title',
                    fieldType: FormFieldSchemaType.Text,
                    required: true,
                    placeholder: 'Incident Title',
                    validation: {
                        minLength: 2,
                    },
                },
                {
                    field: {
                        description: true,
                    },
                    title: 'Description',
                    fieldType: FormFieldSchemaType.LongText,
                    required: true,
                    placeholder: 'Description',
                },
                {
                    field: {
                        incidentSeverity: true,
                    },
                    title: 'Incident Severity',
                    description: 'What type of incident is this?',
                    fieldType: FormFieldSchemaType.Dropdown,
                    dropdownModal: {
                        type: IncidentSeverity,
                        labelField: 'name',
                        valueField: '_id',
                    },
                    required: true,
                    placeholder: 'Incident Severity',
                },
                {
                    field: {
                        monitors: true,
                    },
                    title: 'Monitors affected',
                    description: 'Select monitors affected by this incident.',
                    fieldType: FormFieldSchemaType.MultiSelectDropdown,
                    dropdownModal: {
                        type: Monitor,
                        labelField: 'name',
                        valueField: '_id',
                    },
                    required: true,
                    placeholder: 'Monitors affected',
                },
                {
                    field: {
                        changeMonitorStatusTo: true,
                    },
                    title: 'Change Monitor Status to',
                    description:
                        'This will change the status of all the monitors attached to this incident.',
                    fieldType: FormFieldSchemaType.Dropdown,
                    dropdownModal: {
                        type: MonitorStatus,
                        labelField: 'name',
                        valueField: '_id',
                    },
                    required: true,
                    placeholder: 'Monitor Status',
                },
                {
                    field: {
                        labels: true,
                    },
                    title: 'Labels (Optional)',
                    description:
                        'Team members with access to these labels will only be able to access this resource. This is optional and an advanced feature.',
                    fieldType: FormFieldSchemaType.MultiSelectDropdown,
                    dropdownModal: {
                        type: Label,
                        labelField: 'name',
                        valueField: '_id',
                    },
                    required: false,
                    placeholder: 'Labels',
                },
            ]}
            showRefreshButton={true}
            showFilterButton={true}
            viewPageRoute={props.viewPageRoute}
            columns={[
                {
                    field: {
                        _id: true,
                    },
                    title: 'Incident ID',
                    type: FieldType.Text,
                    isFilterable: true,
                },
                {
                    field: {
                        title: true,
                    },
                    title: 'Title',
                    type: FieldType.Text,
                    isFilterable: true,
                },
                {
                    field: {
                        currentIncidentState: {
                            name: true,
                            color: true,
                        },
                    },
                    title: 'Current State',
                    type: FieldType.Entity,
                    isFilterable: true,
                    filterEntityType: IncidentState,
                    filterQuery: {
                        projectId: props.currentProject?._id,
                    },
                    filterDropdownField: {
                        label: 'name',
                        value: '_id',
                    },
                    getElement: (item: JSONObject): ReactElement => {
                        if (item['currentIncidentState']) {
                            return (
                                <Pill
                                    color={
                                        (
                                            item[
                                                'currentIncidentState'
                                            ] as JSONObject
                                        )['color'] as Color
                                    }
                                    text={
                                        (
                                            item[
                                                'currentIncidentState'
                                            ] as JSONObject
                                        )['name'] as string
                                    }
                                />
                            );
                        }

                        return <></>;
                    },
                },
                {
                    field: {
                        incidentSeverity: {
                            name: true,
                            color: true,
                        },
                    },
                    isFilterable: true,
                    filterEntityType: IncidentSeverity,
                    filterQuery: {
                        projectId: props.currentProject?._id,
                    },
                    filterDropdownField: {
                        label: 'name',
                        value: '_id',
                    },
                    title: 'Incident Severity',
                    type: FieldType.Entity,
                    getElement: (item: JSONObject): ReactElement => {
                        if (item['incidentSeverity']) {
                            return (
                                <Pill
                                    color={
                                        (
                                            item[
                                                'incidentSeverity'
                                            ] as JSONObject
                                        )['color'] as Color
                                    }
                                    text={
                                        (
                                            item[
                                                'incidentSeverity'
                                            ] as JSONObject
                                        )['name'] as string
                                    }
                                />
                            );
                        }

                        return <></>;
                    },
                },
                {
                    field: {
                        monitors: {
                            name: true,
                            _id: true,
                            projectId: true,
                        },
                    },
                    title: 'Monitors Affected',
                    type: FieldType.EntityArray,
                    isFilterable: true,
                    filterEntityType: Monitor,
                    filterQuery: {
                        projectId: props.currentProject?._id,
                    },
                    filterDropdownField: {
                        label: 'name',
                        value: '_id',
                    },
                    getElement: (item: JSONObject): ReactElement => {
                        return (
                            <MonitorsElement
                                monitors={
                                    Monitor.fromJSON(
                                        (item['monitors'] as JSONArray) || [],
                                        Monitor
                                    ) as Array<Monitor>
                                }
                            />
                        );
                    },
                },
                {
                    field: {
                        createdAt: true,
                    },
                    title: 'Created At',
                    type: FieldType.DateTime,
                    isFilterable: true,
                },
                {
                    field: {
                        labels: {
                            name: true,
                            color: true,
                        },
                    },
                    title: 'Labels',
                    type: FieldType.EntityArray,
                    isFilterable: true,
                    filterEntityType: Label,
                    filterQuery: {
                        projectId: props.currentProject?._id,
                    },
                    filterDropdownField: {
                        label: 'name',
                        value: '_id',
                    },
                    getElement: (item: JSONObject): ReactElement => {
                        return (
                            <LabelsElement
                                labels={
                                    Label.fromJSON(
                                        (item['labels'] as JSONArray) || [],
                                        Label
                                    ) as Array<Label>
                                }
                            />
                        );
                    },
                },
            ]}
        />
    );
};

export default IncidentsTable;
