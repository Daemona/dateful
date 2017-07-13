import {Dateful} from './class';

export function dateful (): Dateful;
export function dateful (date: Date): Dateful;
export function dateful (rawDate: number): Dateful;
export function dateful (year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, milliseconds?: number): Dateful;
export function dateful (...args: any[]): Dateful {
    if (args.length === 0) {
        return new Dateful (new Date ());
    }
    if (args.length === 1) {
        if (isDate (args[0])) {
            return new Dateful (args[0]);
        }
        if (isNumber (args[0])) {
            return new Dateful (new Date (args[0]));
        }
        return new Dateful (new Date (args[0]));
    }
    if (args.length > 1) {
        if (args.every (isNumber)) {
            return new Dateful (new Date (Date.UTC.apply (null, args)));
        }
    }
}

export function now (): Dateful {
    return dateful ();
}

export function today (): Dateful {
    return dateful ().startOf ('day');
}

export function tomorrow (): Dateful {
    return dateful ().startOf ('next day');
}

export function yesterday (): Dateful {
    return dateful ().startOf ('previous day');
}

function isDate (value: any): value is Date {
    return typeof value === 'object' && (
            value instanceof Date ||
            Object.prototype.toString.call (value) === '[object Date]'
        );
}

function isNumber (value: any): value is number {
    return typeof value === 'number';
}
