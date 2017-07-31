import {getOrdinalDate, getWeekNumber, removeTime} from '../date-util';
import test from 'ava';

test ('#getWeekNumber returns the number of weeks into its year a passed-in Date is', t => {
    // Week 1 is defined by ISO 8601 as the week with the year's first Thursday.
    // The week with the 4th of Jan in it is an equivalent check.

    // Part of the previous year because the week with the 4th starts on the 2nd:
    t.is (getWeekNumber (new Date (Date.UTC (2017, 0, 1))), 52);

    // All pretty typical and expected:
    t.is (getWeekNumber (new Date (Date.UTC (2017, 0, 4))), 1);
    t.is (getWeekNumber (new Date (Date.UTC (2017, 0, 25))), 4);
    t.is (getWeekNumber (new Date (Date.UTC (2017, 6, 27))), 30);
    t.is (getWeekNumber (new Date (Date.UTC (2017, 11, 29))), 52);

    // Part of the NEXT year because it's in the same week as the 4th of Jan!
    t.is (getWeekNumber (new Date (Date.UTC (2018, 11, 31))), 1);
});

test ('#getOrdinalDate returns the number of days into its year a passed-in Date is', t => {
    t.is (getOrdinalDate (new Date (Date.UTC (2017, 0, 1))), 1);
    t.is (getOrdinalDate (new Date (Date.UTC (2017, 0, 25))), 25);
    t.is (getOrdinalDate (new Date (Date.UTC (2017, 6, 27))), 208);
    t.is (getOrdinalDate (new Date (Date.UTC (2017, 11, 31))), 365);
});

test ('#getOrdinalDate even works correctly on leap years', t => {
    t.is (getOrdinalDate (new Date (Date.UTC (2020, 1, 29))), 60);

    t.is (getOrdinalDate (new Date (Date.UTC (2017, 6, 27))), 208);
    t.is (getOrdinalDate (new Date (Date.UTC (2020, 6, 27))), 209);
});

test ('#removeTime strips out the h, m, s and ms from a date, setting them all to 0', t => {
    const date = new Date (Date.UTC (2017, 6, 27, 12, 30, 45, 500));
    removeTime (date);

    t.is (date.getUTCHours (), 0);
    t.is (date.getUTCMinutes (), 0);
    t.is (date.getUTCSeconds (), 0);
    t.is (date.getUTCMilliseconds (), 0);
});
