import test from 'ava';
import {startOf} from "../../date-util";
import {UNITS} from "../../constants";

const start = new Date ();
test ('when given "year" as param resets the month and smaller units', t => {
    const startOfYear = new Date (start);
    startOf (UNITS.YEAR, startOfYear);

    t.is (startOfYear.getUTCMonth (), 0);
    t.is (startOfYear.getUTCDate (), 1);
    t.is (startOfYear.getUTCHours (), 0);
    t.is (startOfYear.getUTCMinutes (), 0);
    t.is (startOfYear.getUTCSeconds (), 0);
    t.is (startOfYear.getUTCMilliseconds (), 0);
});

test ('when given "month" as param resets the date to 1 and smaller units to 0', t => {
    const startOfMonth = new Date (start);
    startOf (UNITS.MONTH, startOfMonth);

    t.is (startOfMonth.getUTCDate (), 1);
    t.is (startOfMonth.getUTCHours (), 0);
    t.is (startOfMonth.getUTCMinutes (), 0);
    t.is (startOfMonth.getUTCSeconds (), 0);
    t.is (startOfMonth.getUTCMilliseconds (), 0);
});

test ('when given "week" as param resets the date to the most recent Monday', t => {
    const startOfWeek = new Date (start);
    startOf (UNITS.WEEK, startOfWeek);

    t.is (startOfWeek.getUTCDay (), 1);
    t.is (startOfWeek.getUTCHours (), 0);
    t.is (startOfWeek.getUTCMinutes (), 0);
    t.is (startOfWeek.getUTCSeconds (), 0);
    t.is (startOfWeek.getUTCMilliseconds (), 0);
});

test ('when given "day" as param resets the hours and smaller units to 0', t => {
    const startOfDay = new Date (start);
    startOf (UNITS.DAY, startOfDay);

    t.is (startOfDay.getUTCHours (), 0);
    t.is (startOfDay.getUTCMinutes (), 0);
    t.is (startOfDay.getUTCSeconds (), 0);
    t.is (startOfDay.getUTCMilliseconds (), 0);
});

test ('when given "hour" as param resets the minutes and smaller units to 0', t => {
    const startOfHour = new Date (start);
    startOf (UNITS.HOUR, startOfHour);

    t.is (startOfHour.getUTCMinutes (), 0);
    t.is (startOfHour.getUTCSeconds (), 0);
    t.is (startOfHour.getUTCMilliseconds (), 0);
});

test ('when given "minute" as param resets the seconds and milliseconds to 0', t => {
    const startOfMinute = new Date (start);
    startOf (UNITS.MINUTE, startOfMinute);

    t.is (startOfMinute.getUTCSeconds (), 0);
    t.is (startOfMinute.getUTCMilliseconds (), 0);
});

test ('when given "second" as param resets the milliseconds to 0', t => {
    const startOfSecond = new Date (start);
    startOf (UNITS.SECOND, startOfSecond);

    t.is (startOfSecond.getUTCMilliseconds (), 0);
});
