import PositiveNumber from 'Common/Types/PositiveNumber';
import AirtableLib, { FieldSet, Records } from 'airtable';
import Dictionary from 'Common/Types/Dictionary';
import { AirtableApiKey, AirtableBaseId } from '../Config';

export type AirtableRecords = Records<FieldSet>;

class Airtable {
    private static base = new AirtableLib({ apiKey: AirtableApiKey }).base(
        AirtableBaseId
    );

    public static async find(
        tableName: string,
        airtableView: string,
        limit: PositiveNumber
    ): Promise<AirtableRecords> {
        return this.base(tableName)
            .select({ view: airtableView, pageSize: limit.toNumber() })
            .firstPage();
    }

    public static async update(
        tableName: string,
        id: string,
        fields: Dictionary<string>
    ): Promise<void> {
        await this.base(tableName).update(id, fields);
    }

    public static async create(
        tableName: string,
        fields: Dictionary<string>
    ): Promise<void> {
        await this.base(tableName).create(fields);
    }

    public static async delete(tableName: string, id: string): Promise<void> {
        await this.base(tableName).destroy(id);
    }
}

export default Airtable;
