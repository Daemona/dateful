import {format, handleUnitString} from '../util/string-util';
import {TIME_PARTS, UNITS} from "../util/constants";
import {addTo, getWeekNumber, removeTime, set, startOf} from "../util/date-util";

export class Dateful {
    private date: Date;
    private _timeless: boolean;

    constructor (date: Date | Dateful, fixTimezoneOffset?: boolean) {
        this.date = new Date (date.valueOf ());
        if (fixTimezoneOffset) {
            this.subtract (this.date.getTimezoneOffset (), 'minutes');
        }
        if (date instanceof Dateful) {
            this._timeless = date._timeless;
        }
        else {
            this._timeless = false;
        }
        if (this._timeless) {
            removeTime (this.date);
        }
    }

    // Mutator methods

    timeless (goTimeless?: boolean): Dateful {
        if (goTimeless === void 0) {
            goTimeless = true;
        }
        this._timeless = goTimeless;
        if (goTimeless) {
            removeTime (this.date);
        }
        return this;
    }

    startOf (unitString: string): Dateful {
        const handledString = handleUnitString (unitString);
        startOf (handledString, this.date);
        return this;
    }

    add (value: number, unitString: string): Dateful {
        const handledString = handleUnitString (unitString);
        if (this._timeless && TIME_PARTS.includes (handledString)) {
            console.error ('Cannot alter time in timeless mode');
            return this;
        }
        addTo (value, handledString, this.date);
        return this;
    }

    subtract (value: number, unitString: string): Dateful {
        return this.add (-value, unitString);
    }

    set (value: number, unitString: string): Dateful {
        const handledString = handleUnitString (unitString);
        if (this._timeless && TIME_PARTS.includes (handledString)) {
            console.error ('Cannot alter time in timeless mode');
            return this;
        }
        set (value, handledString, this.date);
        return this;
    }

    // Output methods

    get (unitString: string): number {
        const fn = {
            [UNITS.YEAR]        : () => this.date.getUTCFullYear (),
            [UNITS.MONTH]       : () => this.date.getUTCMonth (),
            [UNITS.WEEK]        : () => getWeekNumber (this.date),
            [UNITS.DAY]         : () => this.date.getUTCDate (),
            [UNITS.HOUR]        : () => this.date.getUTCHours (),
            [UNITS.MINUTE]      : () => this.date.getUTCMinutes (),
            [UNITS.SECOND]      : () => this.date.getUTCSeconds (),
            [UNITS.MILLISECOND] : () => this.date.getUTCMilliseconds (),
        }[handleUnitString (unitString)];

        if (fn) {
            return fn ();
        }
        return null;
    }

    format (formatString: string): string {
        return format (this.date, formatString);
    }

    isValid (): boolean {
        return !Number.isNaN (this.date.getTime ());
    }

    value (): Date {
        return this.date;
    }

    valueOf (): number {
        return this.date.valueOf ();
    }

    toString (): string {
        return this.date.toISOString ();
    }
}
