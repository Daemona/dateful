import {handleUnitString} from '../util/string-util';
import {TIME_PARTS} from "../util/constants";
import {addTo, removeTime, startOf} from "../util/date-util";

export class Dateful {
    private date: Date;
    private _timeless: boolean;

    constructor (date: Date | Dateful) {
        this.date = new Date (date.valueOf ());
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

    // Output methods

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
