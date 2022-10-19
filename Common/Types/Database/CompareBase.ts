import BadDataException from '../Exception/BadDataException';
import Typeof from '../Typeof';

export default class CompareBase {
    private _value!: number | Date;
    public get value(): number | Date {
        return this._value;
    }
    public set value(v: number | Date) {
        this._value = v;
    }

    public constructor(value: number | Date) {
        this.value = value;
    }

    public toString(): string {
        return this.value.toString();
    }

    public toNumber(): number {
        if (Typeof.Number === typeof this.value) {
            return this.value as number;
        }

        throw new BadDataException('Value is not a number');
    }

    public toDate(): Date {
        if (this.value instanceof Date) {
            return this.value as Date;
        }

        throw new BadDataException('Value is not a date object');
    }
}
