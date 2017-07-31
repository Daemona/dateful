import {Dateful} from "../class/dateful-class";
import {DATE_PARTS, UNITS, VALUES} from "./constants";

export function getWeekNumber (date: Date): number {
    const diffNextYear = difference (date, startOfWeekYear (date.getUTCFullYear () + 1));
    if (diffNextYear >= 0) {
        return msToWeeks (diffNextYear) + 1;
    }
    const diff = difference (date, startOfWeekYear (date.getUTCFullYear ()));
    if (diff < 0) {
        return msToWeeks (difference (date, startOfWeekYear (date.getUTCFullYear () - 1))) + 1;
    }
    return msToWeeks (diff) + 1;
}

export function getOrdinalDate (date: Date): number {
    return msToDays (difference (date, new Date (date.getUTCFullYear (), 0))) + 1;
}

export function addTo (value: number, unitString: string, date: Date): void {
    if (DATE_PARTS.includes (unitString)) {
        addToDatePart (value, unitString, date);
    }
    else {
        addToTimePart (value, unitString, date);
    }
}

export function startOf (unitString: string, date: Date): void {
    if (DATE_PARTS.includes (unitString)) {
        startOfDatePart (unitString, date);
    } else {
        startOfTimePart (unitString, date);
    }
}

export function removeTime (date: Date): void {
    stripOut (UNITS.HOUR, date);
    stripOut (UNITS.MINUTE, date);
    stripOut (UNITS.SECOND, date);
    stripOut (UNITS.MILLISECOND, date);
}

// Private functions

function stripOut (unitString: string, date: Date): void {
    switch (unitString) {
        case UNITS.MILLENNIUM:
        case UNITS.CENTURY:
        case UNITS.DECADE:
        case UNITS.YEAR:
        case UNITS.MONTH:
        case UNITS.DAY:
            stripOutDatePart (unitString, date);
            break;
        case UNITS.HOUR:
        case UNITS.MINUTE:
        case UNITS.SECOND:
        case UNITS.MILLISECOND:
            stripOutTimePart (unitString, date);
            break;
    }
}

function addToDatePart (value: number, unitString: string, date: Date): void {
    switch (unitString) {
        case UNITS.MILLENNIUM:
            date.setUTCFullYear (date.getUTCFullYear () + (value * 1000));
            break;
        case UNITS.CENTURY:
            date.setUTCFullYear (date.getUTCFullYear () + (value * 100));
            break;
        case UNITS.DECADE:
            date.setUTCFullYear (date.getUTCFullYear () + (value * 10));
            break;
        case UNITS.YEAR:
            date.setUTCFullYear (date.getUTCFullYear () + value);
            break;
        case UNITS.MONTH:
            date.setUTCMonth (date.getUTCMonth () + value);
            break;
        case UNITS.WEEK:
            date.setUTCDate (date.getUTCDate () + (value * 7));
            break;
        case UNITS.DAY:
            date.setUTCDate (date.getUTCDate () + value);
            break;
    }
}

function addToTimePart (value: number, unitString: string, date: Date): void {
    switch (unitString) {
        case UNITS.HOUR:
            date.setUTCHours (date.getUTCHours () + value);
            break;
        case UNITS.MINUTE:
            date.setUTCMinutes (date.getUTCMinutes () + value);
            break;
        case UNITS.SECOND:
            date.setUTCSeconds (date.getUTCSeconds () + value);
            break;
        case UNITS.MILLISECOND:
            date.setUTCMilliseconds (date.getUTCMilliseconds () + value);
            break;
    }
}

function startOfDatePart (unitString: string, date: Date): void {
    switch (unitString) {
        case UNITS.MILLENNIUM:
            stripOut (UNITS.CENTURY, date);
        case UNITS.CENTURY:
            stripOut (UNITS.DECADE, date);
        case UNITS.DECADE:
            stripOut (UNITS.YEAR, date);
        case UNITS.YEAR:
            stripOut (UNITS.MONTH, date);
        case UNITS.MONTH:
            stripOut (UNITS.DAY, date);
        case UNITS.DAY:
            break;
        case UNITS.WEEK:
            date.setUTCDate (date.getUTCDate () - date.getUTCDay () + 1);
    }
    removeTime (date);
}

function startOfTimePart (unitString: string, date: Date): void {
    switch (unitString) {
        case UNITS.HOUR:
            stripOut (UNITS.MINUTE, date);
        case UNITS.MINUTE:
            stripOut (UNITS.SECOND, date);
        case UNITS.SECOND:
            stripOut (UNITS.MILLISECOND, date);
    }
}

function stripOutDatePart (unitString: string, date: Date): void {
    switch (unitString) {
        case UNITS.MILLENNIUM:
            date.setUTCFullYear (Math.floor (date.getUTCFullYear () / 10000));
            break;
        case UNITS.CENTURY:
            date.setUTCFullYear (Math.floor (date.getUTCFullYear () / 1000));
            break;
        case UNITS.DECADE:
            date.setUTCFullYear (Math.floor (date.getUTCFullYear () / 100));
            break;
        case UNITS.YEAR:
            date.setUTCFullYear (Math.floor (date.getUTCFullYear () / 10));
            break;
        case UNITS.MONTH:
            date.setUTCMonth (0);
            break;
        case UNITS.DAY:
            date.setUTCDate (1);
            break;
    }
}

function stripOutTimePart (unitString: string, date: Date): void {
    switch (unitString) {
        case UNITS.HOUR:
            date.setUTCHours (0);
            break;
        case UNITS.MINUTE:
            date.setUTCMinutes (0);
            break;
        case UNITS.SECOND:
            date.setUTCSeconds (0);
            break;
        case UNITS.MILLISECOND:
            date.setUTCMilliseconds (0);
            break;
    }
}

function difference (date1: Date | Dateful, date2: Date | Dateful): number {
    return date1.valueOf () - date2.valueOf ();
}

function msToDays (ms: number): number {
    return Math.floor (ms / VALUES[UNITS.DAY]);
}

function msToWeeks (ms: number): number {
    return Math.floor (ms / VALUES[UNITS.WEEK]);
}

function startOfWeekYear (year: number): Date {
    // The ISO week-numbering year starts on the Monday of the week containing the 4th of January
    return new Dateful (new Date (year, 0, 4))
        .startOf ('week')
        .value ();
}

// function isLeapYear (year: number): boolean {
//     return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
// }
