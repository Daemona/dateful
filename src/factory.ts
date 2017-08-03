import {Dateful} from './class/dateful-class';
import {isDate, isDateful, isNumber, isArray, isBoolean} from "./util/type-util";

export function dateful (date: Date, fixTimezoneOffset?: boolean): Dateful;
export function dateful (dateful: Dateful, fixTimezoneOffset?: boolean): Dateful;
export function dateful (rawDate: number, fixTimezoneOffset?: boolean): Dateful;
export function dateful (dateParts: number[], fixTimezoneOffset?: boolean): Dateful;
export function dateful (fixTimezoneOffset?: boolean): Dateful;
export function dateful (date?: Date | Dateful | number | number[] | boolean, fixTimezoneOffset?: boolean): Dateful {
    if (isDate (date) || isDateful (date)) {
        return new Dateful (date, fixTimezoneOffset);
    }
    if (isNumber (date)) {
        return new Dateful (new Date (date), fixTimezoneOffset);
    }
    if (isArray (date) && date.every (isNumber)) {
        if (date.length === 1) {
            // We assume an array means the consumer wants to treat the one number in it as the year,
            // so add a value for the month in order to make the Date constructor use it as such.
            date.push (0);
        }
        return new Dateful (new Date (Date.UTC.apply (Date, date)), fixTimezoneOffset);
    }
    if (isBoolean (date)) {
        return new Dateful (new Date (), date);
    }
    return new Dateful (new Date ());
}

export function timeless (date: Date, fixTimezoneOffset?: boolean): Dateful;
export function timeless (dateful: Dateful, fixTimezoneOffset?: boolean): Dateful;
export function timeless (rawDate: number, fixTimezoneOffset?: boolean): Dateful;
export function timeless (dateParts: number[], fixTimezoneOffset?: boolean): Dateful;
export function timeless (fixTimezoneOffset?: boolean): Dateful;
export function timeless (...args): Dateful {
    return dateful (...args).timeless ();
}
