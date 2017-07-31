import {Dateful} from './class/dateful-class';
import {isDate, isDateful, isNumber} from "./util/type-util";

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
