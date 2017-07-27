import test from 'ava';
import {Dateful} from '../dateful-class';

test ('method startOf when given "year" as param resets the month and smaller units', t => {
    const date = new Date ();
    const startOfYear = new Dateful (date).startOf ('year').value ();

    t.is (startOfYear.getUTCMonth (), 0);
    t.is (startOfYear.getUTCDate (), 1);
    t.is (startOfYear.getUTCHours (), 0);
    t.is (startOfYear.getUTCMinutes (), 0);
    t.is (startOfYear.getUTCSeconds (), 0);
    t.is (startOfYear.getUTCMilliseconds (), 0);
});

test ('method startOf when given "month" as param resets the date to 1 and smaller units to 0', t => {
    const date = new Date ();
    const startOfMonth = new Dateful (date).startOf ('month').value ();

    t.is (startOfMonth.getUTCDate (), 1);
    t.is (startOfMonth.getUTCHours (), 0);
    t.is (startOfMonth.getUTCMinutes (), 0);
    t.is (startOfMonth.getUTCSeconds (), 0);
    t.is (startOfMonth.getUTCMilliseconds (), 0);
});

test ('method startOf when given "week" as param resets the date to the most recent Monday', t => {
    const date = new Date ();
    const startOfWeek = new Dateful (date).startOf ('week').value ();

    t.is (startOfWeek.getUTCDay (), 1);
    t.is (startOfWeek.getUTCHours (), 0);
    t.is (startOfWeek.getUTCMinutes (), 0);
    t.is (startOfWeek.getUTCSeconds (), 0);
    t.is (startOfWeek.getUTCMilliseconds (), 0);
});

test ('method startOf when given "day" as param resets the hours and smaller units to 0', t => {
    const date = new Date ();
    const startOfDay = new Dateful (date).startOf ('day').value ();

    t.is (startOfDay.getUTCHours (), 0);
    t.is (startOfDay.getUTCMinutes (), 0);
    t.is (startOfDay.getUTCSeconds (), 0);
    t.is (startOfDay.getUTCMilliseconds (), 0);
});

test ('method startOf when given "hour" as param resets the minutes and smaller units to 0', t => {
    const date = new Date ();
    const startOfHour = new Dateful (date).startOf ('hour').value ();

    t.is (startOfHour.getUTCMinutes (), 0);
    t.is (startOfHour.getUTCSeconds (), 0);
    t.is (startOfHour.getUTCMilliseconds (), 0);
});

test ('method startOf when given "minute" as param resets the seconds and milliseconds to 0', t => {
    const date = new Date ();
    const startOfMinute = new Dateful (date).startOf ('minute').value ();

    t.is (startOfMinute.getUTCSeconds (), 0);
    t.is (startOfMinute.getUTCMilliseconds (), 0);
});

test ('method startOf when given "second" as param resets the milliseconds to 0', t => {
    const date = new Date ();
    const startOfSecond = new Dateful (date).startOf ('second').value ();

    t.is (startOfSecond.getUTCMilliseconds (), 0);
});

test ('method startOf also takes plural forms as valid inputs', t => {
    const date = new Date ();
    const startOfYear = new Dateful (date).startOf ('years').value ();
    const startOfMonth = new Dateful (date).startOf ('months').value ();
    const startOfWeek = new Dateful (date).startOf ('weeks').value ();
    const startOfDay = new Dateful (date).startOf ('days').value ();
    const startOfHour = new Dateful (date).startOf ('hours').value ();
    const startOfMinute = new Dateful (date).startOf ('minutes').value ();
    const startOfSecond = new Dateful (date).startOf ('seconds').value ();

    t.is (startOfYear.getUTCMonth (), 0);
    t.is (startOfMonth.getUTCDate (), 1);
    t.is (startOfWeek.getUTCDay (), 1);
    t.is (startOfDay.getUTCHours (), 0);
    t.is (startOfHour.getUTCMinutes (), 0);
    t.is (startOfMinute.getUTCSeconds (), 0);
    t.is (startOfSecond.getUTCMilliseconds (), 0);
});

test ('method startOf also takes short forms as valid inputs', t => {
    const date = new Date ();
    const startOfYear = new Dateful (date).startOf ('y').value ();
    const startOfMonth = new Dateful (date).startOf ('M').value ();
    const startOfWeek = new Dateful (date).startOf ('w').value ();
    const startOfDay = new Dateful (date).startOf ('d').value ();
    const startOfHour = new Dateful (date).startOf ('h').value ();
    const startOfMinute = new Dateful (date).startOf ('m').value ();
    const startOfSecond = new Dateful (date).startOf ('s').value ();

    t.is (startOfYear.getUTCMonth (), 0);
    t.is (startOfMonth.getUTCDate (), 1);
    t.is (startOfWeek.getUTCDay (), 1);
    t.is (startOfDay.getUTCHours (), 0);
    t.is (startOfHour.getUTCMinutes (), 0);
    t.is (startOfMinute.getUTCSeconds (), 0);
    t.is (startOfSecond.getUTCMilliseconds (), 0);
});

test ('method startOf can also take a modifier in the string for previous (day/month/etc)', t => {
    const date = new Date ();
    const startOfToday = new Dateful (date).startOf ('day').value ();
    const startOfYesterday1 = new Dateful (date).startOf ('previous day').value ();
    const startOfYesterday2 = new Dateful (date).startOf ('last day').value ();

    t.is (startOfYesterday1.getUTCDate (), startOfToday.getUTCDate () - 1);
    t.is (startOfYesterday2.getUTCDate (), startOfToday.getUTCDate () - 1);
});

test ('method startOf can also take a modifier in the string for next (day/month/etc)', t => {
    const date = new Date ();
    const startOfToday = new Dateful (date).startOf ('day').value ();
    const startOfTomorrow = new Dateful (date).startOf ('next day').value ();

    t.is (startOfTomorrow.getUTCDate (), startOfToday.getUTCDate () + 1);
});
