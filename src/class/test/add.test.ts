import test from 'ava';
import {Dateful} from '../dateful-class';

test ('when passed a number and "years" adds that many years to the Date', t => {
    const date = new Date (2017, 0, 1);
    const whereDoYouSeeYourself = new Dateful (date).add (5, 'years').value ();

    t.is (whereDoYouSeeYourself.getUTCFullYear (), date.getUTCFullYear () + 5);
});

test ('when passed a number and "months" adds that many months to the Date', t => {
    const date = new Date (2017, 0, 1);
    const threeTrimestersLater = new Dateful (date).add (9, 'months').value ();

    t.is (threeTrimestersLater.getUTCMonth (), date.getUTCMonth () + 9);
});

test ('when passed a number and "week" adds that many weeks to the Date', t => {
    const date = new Date (2017, 0, 1);
    const sinceYouLookedAtMe = new Dateful (date).add (1, 'week').value ();

    t.is (sinceYouLookedAtMe.getUTCDate (), date.getUTCDate () + 7);
});

test ('when passed a number and "days" adds that many days to the Date', t => {
    const date = new Date (2017, 0, 1);
    const laterThereAreZombies = new Dateful (date).add (28, 'days').value ();

    t.is (laterThereAreZombies.getUTCDate (), date.getUTCDate () + 28);
});

test ('when passed a number and "hours" adds that many hours to the Date', t => {
    const date = new Date (2017, 0, 1);
    const fullTimeDay = new Dateful (date).add (8, 'hours').value ();

    t.is (fullTimeDay.getUTCHours (), date.getUTCHours () + 8);
});

test ('when passed a number and "minutes" adds that many minutes to the Date', t => {
    const date = new Date (2017, 0, 1);
    const pomodoro = new Dateful (date).add (25, 'minutes').value ();

    t.is (pomodoro.getUTCMinutes (), date.getUTCMinutes () + 25);
});

test ('when passed a number and "seconds" adds that many seconds to the Date', t => {
    const date = new Date (2017, 0, 1);
    const goneIn = new Dateful (date).add (60, 'seconds').value ();

    t.is (goneIn.getUTCSeconds (), date.getUTCSeconds ());
    t.is (goneIn.getUTCMinutes (), date.getUTCMinutes () + 1);
});

test ('when passed a number and "milliseconds" adds that many milliseconds to the Date', t => {
    const date = new Date (2017, 0, 1);
    const instantaneousUI = new Dateful (date).add (300, 'milliseconds').value ();

    t.is (instantaneousUI.getUTCMilliseconds (), date.getUTCMilliseconds () + 300);
});

test ('also takes singular forms as valid inputs', t => {
    const date = new Date (2017, 0, 1);
    const twoYearsLater = new Dateful (date).add (2, 'year').value ();
    const twoMonthsLater = new Dateful (date).add (2, 'month').value ();
    const twoWeeksLater = new Dateful (date).add (2, 'week').value ();
    const twoDaysLater = new Dateful (date).add (2, 'day').value ();
    const twoHoursLater = new Dateful (date).add (2, 'hour').value ();
    const twoMinutesLater = new Dateful (date).add (2, 'minute').value ();
    const twoSecondsLater = new Dateful (date).add (2, 'second').value ();
    const twoMSLater = new Dateful (date).add (2, 'millisecond').value ();

    t.is (twoYearsLater.getUTCFullYear (), date.getUTCFullYear () + 2);
    t.is (twoMonthsLater.getUTCMonth (), date.getUTCMonth () + 2);
    t.is (twoWeeksLater.getUTCDate (), date.getUTCDate () + 14);
    t.is (twoDaysLater.getUTCDate (), date.getUTCDate () + 2);
    t.is (twoHoursLater.getUTCHours (), date.getUTCHours () + 2);
    t.is (twoMinutesLater.getUTCMinutes (), date.getUTCMinutes () + 2);
    t.is (twoSecondsLater.getUTCSeconds (), date.getUTCSeconds () + 2);
    t.is (twoMSLater.getUTCMilliseconds (), date.getUTCMilliseconds () + 2);
});

test ('also takes short forms as valid inputs', t => {
    const date = new Date (2017, 0, 1);
    const twoYearsLater = new Dateful (date).add (2, 'y').value ();
    const twoMonthsLater = new Dateful (date).add (2, 'M').value ();
    const twoWeeksLater = new Dateful (date).add (2, 'w').value ();
    const twoDaysLater = new Dateful (date).add (2, 'd').value ();
    const twoHoursLater = new Dateful (date).add (2, 'h').value ();
    const twoMinutesLater = new Dateful (date).add (2, 'm').value ();
    const twoSecondsLater = new Dateful (date).add (2, 's').value ();
    const twoMSLater = new Dateful (date).add (2, 'ms').value ();

    t.is (twoYearsLater.getUTCFullYear (), date.getUTCFullYear () + 2);
    t.is (twoMonthsLater.getUTCMonth (), date.getUTCMonth () + 2);
    t.is (twoWeeksLater.getUTCDate (), date.getUTCDate () + 14);
    t.is (twoDaysLater.getUTCDate (), date.getUTCDate () + 2);
    t.is (twoHoursLater.getUTCHours (), date.getUTCHours () + 2);
    t.is (twoMinutesLater.getUTCMinutes (), date.getUTCMinutes () + 2);
    t.is (twoSecondsLater.getUTCSeconds (), date.getUTCSeconds () + 2);
    t.is (twoMSLater.getUTCMilliseconds (), date.getUTCMilliseconds () + 2);
});
