import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import BaseModel from 'Common/Models/BaseModel';
import User from './User';
import Project from './Project';
import CrudApiEndpoint from 'Common/Types/Database/CrudApiEndpoint';
import Route from 'Common/Types/API/Route';
import TableColumnType from 'Common/Types/Database/TableColumnType';
import TableColumn from 'Common/Types/Database/TableColumn';
import ColumnType from 'Common/Types/Database/ColumnType';
import ObjectID from 'Common/Types/ObjectID';
import TableAccessControl from 'Common/Types/Database/AccessControl/TableAccessControl';
import Permission from 'Common/Types/Permission';
import ColumnAccessControl from 'Common/Types/Database/AccessControl/ColumnAccessControl';
import TenantColumn from 'Common/Types/Database/TenantColumn';
import SingularPluralName from 'Common/Types/Database/SingularPluralName';
import IncidentState from './IncidentState';
import Incident from './Incident';
import CanAccessIfCanReadOn from 'Common/Types/Database/CanAccessIfCanReadOn';

@CanAccessIfCanReadOn('incident')
@TenantColumn('projectId')
@TableAccessControl({
    create: [
        Permission.ProjectOwner,
        Permission.CanCreateIncidentStateTimeline,
    ],
    read: [Permission.ProjectOwner, Permission.CanReadIncidentStateTimeline],
    delete: [
        Permission.ProjectOwner,
        Permission.CanDeleteIncidentStateTimeline,
    ],
    update: [Permission.ProjectOwner, Permission.CanEditIncidentStateTimeline],
})
@CrudApiEndpoint(new Route('/incident-state-timeline'))
@Entity({
    name: 'IncidentStateTimeline',
})
@SingularPluralName('Incident State Tiemline', 'Incident State Timelines')
export default class IncidentStateTimeline extends BaseModel {
    @ColumnAccessControl({
        create: [
            Permission.ProjectOwner,
            Permission.CanCreateIncidentStateTimeline,
        ],
        read: [
            Permission.ProjectOwner,
            Permission.CanReadIncidentStateTimeline,
        ],
        update: [],
    })
    @TableColumn({
        manyToOneRelationColumn: 'projectId',
        type: TableColumnType.Entity,
        modelType: Project,
    })
    @ManyToOne(
        (_type: string) => {
            return Project;
        },
        {
            eager: false,
            nullable: true,
            onDelete: 'CASCADE',
            orphanedRowAction: 'nullify',
        }
    )
    @JoinColumn({ name: 'projectId' })
    public project?: Project = undefined;

    @ColumnAccessControl({
        create: [
            Permission.ProjectOwner,
            Permission.CanCreateIncidentStateTimeline,
        ],
        read: [
            Permission.ProjectOwner,
            Permission.CanReadIncidentStateTimeline,
        ],
        update: [],
    })
    @Index()
    @TableColumn({ type: TableColumnType.ObjectID, required: true })
    @Column({
        type: ColumnType.ObjectID,
        nullable: false,
        transformer: ObjectID.getDatabaseTransformer(),
    })
    public projectId?: ObjectID = undefined;

    @ColumnAccessControl({
        create: [
            Permission.ProjectOwner,
            Permission.CanCreateIncidentStateTimeline,
        ],
        read: [
            Permission.ProjectOwner,
            Permission.CanReadIncidentStateTimeline,
        ],
        update: [],
    })
    @TableColumn({
        manyToOneRelationColumn: 'incidentId',
        type: TableColumnType.Entity,
        modelType: Incident,
    })
    @ManyToOne(
        (_type: string) => {
            return Incident;
        },
        {
            eager: false,
            nullable: true,
            onDelete: 'CASCADE',
            orphanedRowAction: 'nullify',
        }
    )
    @JoinColumn({ name: 'incidentId' })
    public incident?: Incident = undefined;

    @ColumnAccessControl({
        create: [
            Permission.ProjectOwner,
            Permission.CanCreateIncidentStateTimeline,
        ],
        read: [
            Permission.ProjectOwner,
            Permission.CanReadIncidentStateTimeline,
        ],
        update: [],
    })
    @Index()
    @TableColumn({ type: TableColumnType.ObjectID, required: true })
    @Column({
        type: ColumnType.ObjectID,
        nullable: false,
        transformer: ObjectID.getDatabaseTransformer(),
    })
    public incidentId?: ObjectID = undefined;

    @ColumnAccessControl({
        create: [
            Permission.ProjectOwner,
            Permission.CanCreateIncidentStateTimeline,
        ],
        read: [
            Permission.ProjectOwner,
            Permission.CanReadIncidentStateTimeline,
        ],
        update: [],
    })
    @TableColumn({
        manyToOneRelationColumn: 'createdByUserId',
        type: TableColumnType.Entity,
        modelType: User,
    })
    @ManyToOne(
        (_type: string) => {
            return User;
        },
        {
            eager: false,
            nullable: true,
            onDelete: 'CASCADE',
            orphanedRowAction: 'nullify',
        }
    )
    @JoinColumn({ name: 'createdByUserId' })
    public createdByUser?: User = undefined;

    @ColumnAccessControl({
        create: [
            Permission.ProjectOwner,
            Permission.CanCreateIncidentStateTimeline,
        ],
        read: [
            Permission.ProjectOwner,
            Permission.CanReadIncidentStateTimeline,
        ],
        update: [],
    })
    @TableColumn({ type: TableColumnType.ObjectID })
    @Column({
        type: ColumnType.ObjectID,
        nullable: true,
        transformer: ObjectID.getDatabaseTransformer(),
    })
    public createdByUserId?: ObjectID = undefined;

    @ColumnAccessControl({
        create: [],
        read: [],
        update: [],
    })
    @TableColumn({
        manyToOneRelationColumn: 'deletedByUserId',
        type: TableColumnType.ObjectID,
    })
    @ManyToOne(
        (_type: string) => {
            return User;
        },
        {
            cascade: false,
            eager: false,
            nullable: true,
            onDelete: 'CASCADE',
            orphanedRowAction: 'nullify',
        }
    )
    @JoinColumn({ name: 'deletedByUserId' })
    public deletedByUser?: User = undefined;

    @ColumnAccessControl({
        create: [],
        read: [],
        update: [],
    })
    @TableColumn({ type: TableColumnType.ObjectID })
    @Column({
        type: ColumnType.ObjectID,
        nullable: true,
        transformer: ObjectID.getDatabaseTransformer(),
    })
    public deletedByUserId?: ObjectID = undefined;

    @ColumnAccessControl({
        create: [
            Permission.ProjectOwner,
            Permission.CanCreateIncidentStateTimeline,
        ],
        read: [
            Permission.ProjectOwner,
            Permission.CanReadIncidentStateTimeline,
        ],
        update: [
            Permission.ProjectOwner,
            Permission.CanEditIncidentStateTimeline,
        ],
    })
    @TableColumn({
        manyToOneRelationColumn: 'incidentStateId',
        type: TableColumnType.Entity,
        modelType: IncidentState,
    })
    @ManyToOne(
        (_type: string) => {
            return IncidentState;
        },
        {
            eager: false,
            nullable: true,
            orphanedRowAction: 'nullify',
        }
    )
    @JoinColumn({ name: 'incidentStateId' })
    public incidentState?: IncidentState = undefined;

    @ColumnAccessControl({
        create: [
            Permission.ProjectOwner,
            Permission.CanCreateIncidentStateTimeline,
        ],
        read: [
            Permission.ProjectOwner,
            Permission.CanReadIncidentStateTimeline,
        ],
        update: [
            Permission.ProjectOwner,
            Permission.CanEditIncidentStateTimeline,
        ],
    })
    @Index()
    @TableColumn({ type: TableColumnType.ObjectID, required: true })
    @Column({
        type: ColumnType.ObjectID,
        nullable: false,
        transformer: ObjectID.getDatabaseTransformer(),
    })
    public incidentStateId?: ObjectID = undefined;
}
