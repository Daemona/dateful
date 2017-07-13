const YEAR = 'year';
const MONTH = 'month';
const WEEK = 'week';
const DAY = 'day';
const HOUR = 'hour';
const MINUTE = 'minute';
const SECOND = 'second';
const MILLISECOND = 'millisecond';

export class Dateful {
    private date: Date;

    constructor (date: Date) {
        this.date = date;
    }

    startOf (unitString: string): Dateful {
        const splitString = unitString.split (' ');
        if (splitString.length === 2) {
            unitString = splitString[1];
            prevOrNext (splitString[0]);
        }
        switch (stripPlural (unitString)) {
            case YEAR:
                this.stripOut (MONTH);
            case MONTH:
                this.stripOut (DAY);
            case DAY:
                this.stripOut (HOUR);
            case HOUR:
                this.stripOut (MINUTE);
            case MINUTE:
                this.stripOut (SECOND);
            case SECOND:
                this.stripOut (MILLISECOND);
                break;
            case WEEK:
                this.date.setUTCDate (this.date.getUTCDate () - this.date.getUTCDay () + 1);
                this.stripOut (HOUR);
                this.stripOut (MINUTE);
                this.stripOut (SECOND);
                this.stripOut (MILLISECOND);
        }
        return this;

        function prevOrNext (string: string): void {
            if (string === 'last' || string === 'previous') {
                this.subtract (1, unitString);
            }
            if (string === 'next') {
                this.add (1, unitString);
            }
        }
    }

    add (value: number, unitString: string): Dateful {
        switch (stripPlural (unitString)) {
            case YEAR:
                this.date.setUTCFullYear (this.date.getUTCFullYear () + value);
                break;
            case MONTH:
                this.date.setUTCMonth (this.date.getUTCMonth () + value);
                break;
            case WEEK:
                this.date.setUTCDate (this.date.getUTCDate () + (value * 7));
                break;
            case DAY:
                this.date.setUTCDate (this.date.getUTCDate () + value);
                break;
            case HOUR:
                this.date.setUTCHours (this.date.getUTCHours () + value);
                break;
            case MINUTE:
                this.date.setUTCMinutes (this.date.getUTCMinutes () + value);
                break;
            case SECOND:
                this.date.setUTCSeconds (this.date.getUTCSeconds () + value);
                break;
            case MILLISECOND:
                this.date.setUTCMilliseconds (this.date.getUTCMilliseconds () + value);
                break;
        }
        return this;
    }

    subtract (value: number, unitString: string): Dateful {
        return this.add (-value, unitString);
    }

    stripOut (unitString: string): Dateful {
        switch (stripPlural (unitString)) {
            case YEAR:
                this.date.setUTCFullYear (0);
                break;
            case MONTH:
                this.date.setUTCMonth (0);
                break;
            case DAY:
                this.date.setUTCDate (1);
                break;
            case HOUR:
                this.date.setUTCHours (0);
                break;
            case MINUTE:
                this.date.setUTCMinutes (0);
                break;
            case SECOND:
                this.date.setUTCSeconds (0);
                break;
            case MILLISECOND:
                this.date.setUTCMilliseconds (0);
                break;
        }
        return this;
    }

    isValid (): boolean {
        return Number.isNaN (this.date.getTime ());
    }

    objectValue (): Date {
        return this.date;
    }

    valueOf (): number {
        return this.date.getTime ();
    }

    toString (): string {
        return this.date.toUTCString ();
    }
}

function stripPlural (string: string): string {
    if (string[string.length - 1] === 's') {
        return string.slice (0, string.length - 1);
    }
    return string;
}
