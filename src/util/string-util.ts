import {UNITS, WEEKDAYS, MONTHS} from './constants';
import {getOrdinalDate, getWeekNumber} from "./date-util";
import {Dateful} from "../class/dateful-class";
import {isUndefined} from "./type-util";

export function handleUnitString (string: string): string {
    const unitArrays = {
        [UNITS.MILLENNIUM]  : ['millennium', 'millennia', 'millenniums', 'kyear', 'ky', 'kyr', 'kyrs', 'kiloyear', 'kiloyears'],
        [UNITS.CENTURY]     : ['century', 'centuries'],
        [UNITS.DECADE]      : ['decade', 'decades'],
        [UNITS.YEAR]        : ['y', 'yr', 'year', 'years', 'yrs'],
        [UNITS.MONTH]       : ['M', 'mo', 'mth', 'month', 'months'],
        [UNITS.WEEK]        : ['w', 'wk', 'wks', 'week', 'weeks'],
        [UNITS.DAY]         : ['d', 'day', 'days'],
        [UNITS.HOUR]        : ['h', 'hr', 'hrs', 'hour', 'hours'],
        [UNITS.MINUTE]      : ['m', 'min', 'mins', 'minute', 'minutes'],
        [UNITS.SECOND]      : ['s', 'sec', 'secs', 'second', 'seconds'],
        [UNITS.MILLISECOND] : ['ms', 'msec', 'msecs', 'millisecond', 'milliseconds']
    };
    for (let key in unitArrays) {
        if (unitArrays[key].includes (string)) {
            return key;
        }
    }
    return string;
}

export function format (date: Date, formatString: string): string {
    return formatString
        .replace ('YYYY',  () => `${date.getUTCFullYear ()}`)
        .replace ('YY',    () => `${date.getUTCFullYear ()}`.slice (2, 4))
        .replace ('Month', () => MONTHS.LONG[date.getUTCMonth ()])
        .replace ('Mnth',  () => MONTHS.SHORT[date.getUTCMonth ()])
        .replace ('MM',    () => pad (date.getUTCMonth () + 1, 2))
        .replace ('Www',   () => `W${pad (getWeekNumber (date), 2)}`)
        .replace ('Day',   () => WEEKDAYS[date.getUTCDay ()])
        .replace ('DDD',   () => `${getOrdinalDate (date)}`)
        .replace ('DD',    () => pad (date.getUTCDate (), 2))
        .replace ('Dth',   () => getOrdinalNumber (date.getUTCDate ()))
        .replace ('D',     () => `${date.getUTCDay () || 7}`)
        .replace ('hh.hhh',() => timeToDecimalHours (date, 3))
        .replace ('hh.hh', () => timeToDecimalHours (date, 2))
        .replace ('hh.h',  () => timeToDecimalHours (date, 1))
        .replace ('hh',    () => pad (date.getUTCHours (), 2))
        .replace ('mm.mmm',() => timeToDecimalMinutes (date, 3))
        .replace ('mm.mm', () => timeToDecimalMinutes (date, 2))
        .replace ('mm.m',  () => timeToDecimalMinutes (date, 1))
        .replace ('mm',    () => pad (date.getUTCMinutes (), 2))
        .replace ('ss.sss',() => timeToDecimalSeconds (date, 3))
        .replace ('ss.ss', () => timeToDecimalSeconds (date, 2))
        .replace ('ss.s',  () => timeToDecimalSeconds (date, 1))
        .replace ('ss',    () => pad (date.getUTCSeconds (), 2));
}

export function parseString (dateString: string): Dateful {
    return parseISOString (dateString)
        || parseRFCString (dateString)
        || parseNaturalString (dateString)
        || new Dateful (new Date (dateString));
}

function parseISOString (dateString: string): Dateful {
    if (dateString.length >= 4) {
        const [dateStamp, timeStamp] = dateString.split ('T');
        const [year, month, date] = parseDatePart (dateStamp);
        const [hours, minutes, seconds, milliseconds] = parseTimePart (timeStamp);

        const dateful = new Dateful (new Date (year, month, date, hours, minutes, seconds, milliseconds));

        if (dateful.isValid ()) {
            return dateful;
        }
        else {
            return void 0;
        }
    }

    function parseDatePart (dateString: string): number[] {
        // Check for extended format first

        /*todo*/
    }

    function parseTimePart (timeString: string): number[] {
        if (isUndefined (timeString)) {
            return [];
        }
        /*todo*/
    }
}

function parseRFCString (dateString: string): Dateful {
    /*todo*/
}

function parseNaturalString (dateString: string): Dateful {
    /*todo*/
}

function getOrdinalNumber (number: number): string {
    if ([1,2,3].includes (number % 10) && Math.floor (number / 10) % 10 !== 1) {
        switch (number % 10) {
            case 1:
                return `${number}st`;
            case 2:
                return `${number}nd`;
            case 3:
                return `${number}rd`;
        }
    }
    return `${number}th`;
}

function timeToDecimalHours (date: Date, dp: number): string {
    const hours = date.getUTCHours ();
    const fraction = (date.getUTCMinutes () / 60) + (date.getUTCSeconds () / 3600) + (date.getMilliseconds () / 3600000);
    return `${pad (hours, 2)}.${roundFraction (fraction, dp)}`;
}

function timeToDecimalMinutes (date: Date, dp: number): string {
    const minutes = date.getUTCMinutes ();
    const fraction = (date.getUTCSeconds () / 60) + (date.getUTCMilliseconds () / 60000);
    return `${pad (minutes, 2)}.${roundFraction (fraction, dp)}`;
}

function timeToDecimalSeconds (date: Date, dp: number): string {
    const seconds = date.getUTCSeconds ();
    const fraction = date.getMilliseconds () / 1000;
    return `${pad (seconds, 2)}.${roundFraction (fraction, dp)}`;
}

function roundFraction (number: number, dp: number): string {
    return `${Math.round (number * (10 ** dp))}`;
}

function pad (number: string | number, digits: number): string {
    return number.toString ().padStart (digits, '0');
}
