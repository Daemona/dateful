const MILLENNIUM = 'Millennia';
const CENTURY = 'Centuries';
const DECADE = 'Decades';
const YEAR = 'Years';
const MONTH = 'Months';
const WEEK = 'Weeks';
const DAY = 'Days';
const HOUR = 'Hours';
const MINUTE = 'Minutes';
const SECOND = 'Seconds';
const MILLISECOND = 'Milliseconds';

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
        const splitString = unitString.split (' ');
        if (splitString.length === 2) {
            unitString = splitString[1];
            prevOrNext (splitString[0], this);
        }
        const handledString = handleUnitString (unitString);
        switch (handledString) {
            case MILLENNIUM:
            case CENTURY:
            case DECADE:
            case YEAR:
            case MONTH:
            case WEEK:
            case DAY:
                startOfDatePart (handledString, this.date);
            case HOUR:
            case MINUTE:
            case SECOND:
                startOfTimePart (handledString, this.date);
        }
        return this;

        function prevOrNext (string: string, dateful: Dateful): void {
            if (string === 'last' || string === 'previous') {
                dateful.subtract (1, unitString);
            }
            if (string === 'next') {
                dateful.add (1, unitString);
            }
        }
    }

    add (value: number, unitString: string): Dateful {
        const verifiedString = handleUnitString (unitString);
        switch (verifiedString) {
            case MILLENNIUM:
            case CENTURY:
            case DECADE:
            case YEAR:
            case MONTH:
            case WEEK:
            case DAY:
                addToDate (value, verifiedString, this.date);
                break;
            case HOUR:
            case MINUTE:
            case SECOND:
            case MILLISECOND:
                if (this._timeless) {
                    console.error ('Cannot alter time in timeless mode');
                }
                else {
                    addToTime (value, verifiedString, this.date);
                }
                break;
        }
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

// Private functions

function addToDate (value: number, unitString: string, date: Date): void {
    switch (unitString) {
        case MILLENNIUM:
            date.setUTCFullYear (date.getUTCFullYear () + (value * 1000));
            break;
        case CENTURY:
            date.setUTCFullYear (date.getUTCFullYear () + (value * 100));
            break;
        case DECADE:
            date.setUTCFullYear (date.getUTCFullYear () + (value * 10));
            break;
        case YEAR:
            date.setUTCFullYear (date.getUTCFullYear () + value);
            break;
        case MONTH:
            date.setUTCMonth (date.getUTCMonth () + value);
            break;
        case WEEK:
            date.setUTCDate (date.getUTCDate () + (value * 7));
            break;
        case DAY:
            date.setUTCDate (date.getUTCDate () + value);
            break;
    }
}

function addToTime (value: number, unitString: string, date: Date): void {
    switch (unitString) {
        case HOUR:
            date.setUTCHours (date.getUTCHours () + value);
            break;
        case MINUTE:
            date.setUTCMinutes (date.getUTCMinutes () + value);
            break;
        case SECOND:
            date.setUTCSeconds (date.getUTCSeconds () + value);
            break;
        case MILLISECOND:
            date.setUTCMilliseconds (date.getUTCMilliseconds () + value);
            break;
    }
}

function startOfDatePart (unitString: string, date: Date) {
    switch (unitString) {
        case MILLENNIUM:
            stripOut (CENTURY, date);
        case CENTURY:
            stripOut (DECADE, date);
        case DECADE:
            stripOut (YEAR, date);
        case YEAR:
            stripOut (MONTH, date);
        case MONTH:
            stripOut (DAY, date);
        case DAY:
            break;
        case WEEK:
            date.setUTCDate (date.getUTCDate () - date.getUTCDay () + 1);
    }
    removeTime (date);
}

function startOfTimePart (unitString: string, date: Date): void {
    switch (unitString) {
        case HOUR:
            stripOut (MINUTE, date);
        case MINUTE:
            stripOut (SECOND, date);
        case SECOND:
            stripOut (MILLISECOND, date);
    }
}

function removeTime (date: Date): void {
    stripOut (HOUR, date);
    stripOut (MINUTE, date);
    stripOut (SECOND, date);
    stripOut (MILLISECOND, date);
}

function stripOut (unitString: string, date: Date): void {
    switch (unitString) {
        case MILLENNIUM:
        case CENTURY:
        case DECADE:
        case YEAR:
        case MONTH:
        case DAY:
            stripOutDateComponent (unitString, date);
            break;
        case HOUR:
        case MINUTE:
        case SECOND:
        case MILLISECOND:
            stripOutTimeComponent (unitString, date);
            break;
    }

    function stripOutDateComponent (unitString: string, date: Date): void {
        switch (unitString) {
            case MILLENNIUM:
                date.setUTCFullYear (Math.floor (date.getUTCFullYear () / 10000));
                break;
            case CENTURY:
                date.setUTCFullYear (Math.floor (date.getUTCFullYear () / 1000));
                break;
            case DECADE:
                date.setUTCFullYear (Math.floor (date.getUTCFullYear () / 100));
                break;
            case YEAR:
                date.setUTCFullYear (Math.floor (date.getUTCFullYear () / 10));
                break;
            case MONTH:
                date.setUTCMonth (0);
                break;
            case DAY:
                date.setUTCDate (1);
                break;
        }
    }

    function stripOutTimeComponent (unitString: string, date: Date): void {
        switch (unitString) {
            case HOUR:
                date.setUTCHours (0);
                break;
            case MINUTE:
                date.setUTCMinutes (0);
                break;
            case SECOND:
                date.setUTCSeconds (0);
                break;
            case MILLISECOND:
                date.setUTCMilliseconds (0);
                break;
        }
    }
}

function handleUnitString (string: string): string {
    const units = {
        [MILLENNIUM]: ['millennium', 'millennia', 'millenniums', 'kyear', 'ky', 'kyr', 'kyrs', 'kiloyear', 'kiloyears'],
        [CENTURY]: ['century', 'centuries'],
        [DECADE]: ['decade', 'decades'],
        [YEAR]: ['y', 'yr', 'year', 'years', 'yrs'],
        [MONTH]: ['M', 'mo', 'mth', 'month', 'months'],
        [WEEK]: ['w', 'wk', 'wks', 'week', 'weeks'],
        [DAY]: ['d', 'day', 'days'],
        [HOUR]: ['h', 'hr', 'hrs', 'hour', 'hours'],
        [MINUTE]: ['m', 'min', 'mins', 'minute', 'minutes'],
        [SECOND]: ['s', 'sec', 'secs', 'second', 'seconds'],
        [MILLISECOND]: ['ms', 'msec', 'msecs', 'millisecond', 'milliseconds']
    };
    for (let key in units) {
        if (units[key].includes (string)) {
            return key;
        }
    }
    return string;
}
