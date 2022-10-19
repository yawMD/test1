export default class Columns {
    private _columns: Array<string> = [];
    public get columns(): Array<string> {
        return this._columns;
    }
    public set columns(v: Array<string>) {
        this._columns = v;
    }

    public constructor(columns: Array<string>) {
        this.columns = columns;
    }

    public addColumn(columnName: string): void {
        this.columns.push(columnName);
    }

    public hasColumn(columnName: string): boolean {
        return this.columns.includes(columnName);
    }
}
