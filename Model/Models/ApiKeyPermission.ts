import {
    Column,
    Entity,
    Index,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
} from 'typeorm';
import BaseModel from 'Common/Models/BaseModel';
import User from './User';
import CrudApiEndpoint from 'Common/Types/Database/CrudApiEndpoint';
import Route from 'Common/Types/API/Route';
import TableColumnType from 'Common/Types/Database/TableColumnType';
import TableColumn from 'Common/Types/Database/TableColumn';
import ColumnType from 'Common/Types/Database/ColumnType';
import ObjectID from 'Common/Types/ObjectID';
import ColumnLength from 'Common/Types/Database/ColumnLength';
import Permission from 'Common/Types/Permission';
import Label from './Label';
import ApiKey from './ApiKey';
import Project from './Project';
import TenantColumn from 'Common/Types/Database/TenantColumn';
import TableAccessControl from 'Common/Types/Database/AccessControl/TableAccessControl';
import ColumnAccessControl from 'Common/Types/Database/AccessControl/ColumnAccessControl';
import SingularPluralName from 'Common/Types/Database/SingularPluralName';
import UniqueColumnBy from 'Common/Types/Database/UniqueColumnBy';

@TableAccessControl({
    create: [
        Permission.ProjectOwner,
        Permission.CanCreateProjectApiKey,
        Permission.CanEditProjectApiKeyPermissions,
    ],
    read: [Permission.ProjectOwner, Permission.CanReadProjectApiKey],
    delete: [
        Permission.ProjectOwner,
        Permission.CanDeleteProjectApiKey,
        Permission.CanEditProjectApiKeyPermissions,
    ],
    update: [
        Permission.ProjectOwner,
        Permission.CanEditProjectApiKeyPermissions,
        Permission.CanEditProjectApiKey,
    ],
})
@TenantColumn('projectId')
@CrudApiEndpoint(new Route('/api-key-permission'))
@Entity({
    name: 'ApiKeyPermission',
})
@SingularPluralName('Permission', 'Permissions')
export default class APIKeyPermission extends BaseModel {
    @ColumnAccessControl({
        create: [
            Permission.ProjectOwner,
            Permission.CanCreateProjectApiKey,
            Permission.CanEditProjectApiKeyPermissions,
        ],
        read: [Permission.ProjectOwner, Permission.CanReadProjectApiKey],
        update: [
            Permission.ProjectOwner,
            Permission.CanEditProjectApiKeyPermissions,
        ],
    })
    @TableColumn({
        manyToOneRelationColumn: 'apiKeyId',
        type: TableColumnType.Entity,
        modelType: ApiKey,
    })
    @ManyToOne(
        (_type: string) => {
            return ApiKey;
        },
        {
            eager: false,
            nullable: true,
            onDelete: 'CASCADE',
            orphanedRowAction: 'nullify',
        }
    )
    @JoinColumn({ name: 'apiKeyId' })
    public apiKey?: ApiKey = undefined;

    @ColumnAccessControl({
        create: [
            Permission.ProjectOwner,
            Permission.CanCreateProjectApiKey,
            Permission.CanEditProjectApiKeyPermissions,
        ],
        read: [Permission.ProjectOwner, Permission.CanReadProjectApiKey],
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
            Permission.CanCreateProjectApiKey,
            Permission.CanEditProjectApiKeyPermissions,
        ],
        read: [Permission.ProjectOwner, Permission.CanReadProjectApiKey],
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
            Permission.CanCreateProjectApiKey,
            Permission.CanEditProjectApiKeyPermissions,
        ],
        read: [Permission.ProjectOwner, Permission.CanReadProjectApiKey],
        update: [],
    })
    @Index()
    @TableColumn({ type: TableColumnType.ObjectID, required: true })
    @Column({
        type: ColumnType.ObjectID,
        nullable: false,
        transformer: ObjectID.getDatabaseTransformer(),
    })
    public apiKeyId?: ObjectID = undefined;

    @ColumnAccessControl({
        create: [Permission.ProjectOwner, Permission.CanCreateProjectApiKey],
        read: [Permission.ProjectOwner, Permission.CanReadProjectApiKey],
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
        create: [Permission.ProjectOwner, Permission.CanCreateProjectApiKey],
        read: [Permission.ProjectOwner, Permission.CanReadProjectApiKey],
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
        create: [Permission.ProjectOwner, Permission.CanCreateProjectApiKey],
        read: [Permission.ProjectOwner, Permission.CanReadProjectApiKey],
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
            Permission.CanCreateProjectApiKey,
            Permission.CanEditProjectApiKeyPermissions,
        ],
        read: [Permission.ProjectOwner, Permission.CanReadProjectApiKey],
        update: [
            Permission.ProjectOwner,
            Permission.CanEditProjectApiKeyPermissions,
            Permission.CanEditProjectApiKey,
        ],
    })
    @TableColumn({ required: true, type: TableColumnType.ShortText })
    @UniqueColumnBy('apiKeyId')
    @Column({
        nullable: false,
        type: ColumnType.ShortText,
        length: ColumnLength.ShortText,
    })
    public permission?: Permission = undefined;

    @ColumnAccessControl({
        create: [
            Permission.ProjectOwner,
            Permission.CanCreateProjectApiKey,
            Permission.CanEditProjectApiKeyPermissions,
        ],
        read: [Permission.ProjectOwner, Permission.CanReadProjectApiKey],
        update: [
            Permission.ProjectOwner,
            Permission.CanEditProjectApiKeyPermissions,
            Permission.CanEditProjectApiKey,
        ],
    })
    @TableColumn({
        required: false,
        type: TableColumnType.EntityArray,
        modelType: Label,
    })
    @ManyToMany(
        () => {
            return Label;
        },
        { eager: false }
    )
    @JoinTable({
        name: 'ApiKeyPermissionLabel',
        inverseJoinColumn: {
            name: 'labelId',
            referencedColumnName: '_id',
        },
        joinColumn: {
            name: 'apiKeyPermissionId',
            referencedColumnName: '_id',
        },
    })
    public labels?: Array<Label> = undefined;
}
