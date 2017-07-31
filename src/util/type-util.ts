import {Dateful} from '../class/dateful-class';

export function isDateful (value: any): value is Dateful {
    return typeof value === 'object' && (
        value instanceof Dateful ||
        Object.prototype.toString.call (value) === '[object Dateful]'
    )
}

export function isDate (value: any): value is Date {
    return typeof value === 'object' && (
            value instanceof Date ||
            Object.prototype.toString.call (value) === '[object Date]'
        );
}

export function isNumber (value: any): value is number {
    return typeof value === 'number';
}

export function isUndefined (value: any): boolean {
    return value === void 0;
}
