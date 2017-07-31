import {UNITS} from './constants';

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
