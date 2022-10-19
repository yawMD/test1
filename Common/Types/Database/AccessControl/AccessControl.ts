import Permission from '../../Permission';

export interface ColumnAccessControl {
    read: Array<Permission>;
    create: Array<Permission>;
    update: Array<Permission>;
}

export interface TableAccessControl extends ColumnAccessControl {
    delete: Array<Permission>;
}
