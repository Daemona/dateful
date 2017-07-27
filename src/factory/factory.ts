import {Dateful} from '../class/dateful-class';

export function dateful (): Dateful;
export function dateful (date: Date): Dateful;
export function dateful (dateful: Dateful): Dateful;
export function dateful (rawDate: number): Dateful;
export function dateful (year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, milliseconds?: number): Dateful;
export function dateful (...args: any[]): Dateful {
    if (args.length === 1) {
        if (isDate (args[0]) || isDateful (args[0])) {
            return new Dateful (args[0]);
        }
        return new Dateful (new Date (args[0]));
    }
    if (args.length > 1) {
        if (args.every (isNumber)) {
            return new Dateful (new Date (Date.UTC.apply (Date, args)));
        }
    }
    return new Dateful (new Date ());
}

export function timeless (): Dateful;
export function timeless (date: Date): Dateful;
export function timeless (dateful: Dateful): Dateful;
export function timeless (rawDate: number): Dateful;
export function timeless (year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, milliseconds?: number): Dateful;
export function timeless (...args): Dateful {
    return dateful (...args).timeless ();
}

function isDate (value: any): value is Date {
    return typeof value === 'object' && (
        value instanceof Date ||
        Object.prototype.toString.call (value) === '[object Date]'
    );
}

function isDateful (value: any): value is Dateful {
    return typeof value === 'object' && (
        value instanceof Dateful ||
        Object.prototype.toString.call (value) === '[object Dateful]'
    )
}

function isNumber (value: any): value is number {
    return typeof value === 'number';
}
