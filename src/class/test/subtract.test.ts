import test from 'ava';
import {Dateful} from '../dateful-class';

test ('when passed a number and "years" subtracts that many years from the Date', t => {
    const date = new Date (2017, 0, 1);
    const whereDoYouSeeYourself = new Dateful (date).subtract (5, 'years').value ();

    t.is (whereDoYouSeeYourself.getUTCFullYear (), date.getUTCFullYear () - 5);
});

test ('when passed a number and "months" subtracts that many months from the Date', t => {
    const date = new Date (2017, 11, 1);
    const threeTrimestersLater = new Dateful (date).subtract (9, 'months').value ();

    t.is (threeTrimestersLater.getUTCMonth (), date.getUTCMonth () - 9);
});

test ('when passed a number and "week" subtracts that many weeks from the Date', t => {
    const date = new Date (2017, 0, 30);
    const sinceYouLookedAtMe = new Dateful (date).subtract (1, 'week').value ();

    t.is (sinceYouLookedAtMe.getUTCDate (), date.getUTCDate () - 7);
});

test ('when passed a number and "days" subtracts that many days from the Date', t => {
    const date = new Date (2017, 0, 30);
    const laterThereAreZombies = new Dateful (date).subtract (28, 'days').value ();

    t.is (laterThereAreZombies.getUTCDate (), date.getUTCDate () - 28);
});

test ('when passed a number and "hours" subtracts that many hours from the Date', t => {
    const date = new Date (2017, 0, 1, 23);
    const fullTimeDay = new Dateful (date).subtract (8, 'hours').value ();

    t.is (fullTimeDay.getUTCHours (), date.getUTCHours () - 8);
});

test ('when passed a number and "minutes" subtracts that many minutes from the Date', t => {
    const date = new Date (2017, 0, 1, 0, 30);
    const pomodoro = new Dateful (date).subtract (25, 'minutes').value ();

    t.is (pomodoro.getUTCMinutes (), date.getUTCMinutes () - 25);
});

test ('when passed a number and "seconds" subtracts that many seconds from the Date', t => {
    const date = new Date (2017, 0, 1, 0, 5);
    const goneIn = new Dateful (date).subtract (60, 'seconds').value ();

    t.is (goneIn.getUTCSeconds (), date.getUTCSeconds ());
    t.is (goneIn.getUTCMinutes (), date.getUTCMinutes () - 1);
});

test ('when passed a number and "milliseconds" subtracts that many milliseconds from the Date', t => {
    const date = new Date (2017, 0, 1, 0, 0, 0, 500);
    const InstantaneousUI = new Dateful (date).subtract (300, 'milliseconds').value ();

    t.is (InstantaneousUI.getUTCMilliseconds (), date.getUTCMilliseconds () - 300);
});

test ('also takes singular forms as valid inputs', t => {
    const date = new Date (2017, 5, 16, 12, 30, 30, 500);
    const twoYearsEarlier = new Dateful (date).subtract (2, 'year').value ();
    const twoMonthsEarlier = new Dateful (date).subtract (2, 'month').value ();
    const twoWeeksEarlier = new Dateful (date).subtract (2, 'week').value ();
    const twoDaysEarlier = new Dateful (date).subtract (2, 'day').value ();
    const twoHoursEarlier = new Dateful (date).subtract (2, 'hour').value ();
    const twoMinutesEarlier = new Dateful (date).subtract (2, 'minute').value ();
    const twoSecondsEarlier = new Dateful (date).subtract (2, 'second').value ();
    const twoMSEarlier = new Dateful (date).subtract (2, 'millisecond').value ();

    t.is (twoYearsEarlier.getUTCFullYear (), date.getUTCFullYear () - 2);
    t.is (twoMonthsEarlier.getUTCMonth (), date.getUTCMonth () - 2);
    t.is (twoWeeksEarlier.getUTCDate (), date.getUTCDate () - 14);
    t.is (twoDaysEarlier.getUTCDate (), date.getUTCDate () - 2);
    t.is (twoHoursEarlier.getUTCHours (), date.getUTCHours () - 2);
    t.is (twoMinutesEarlier.getUTCMinutes (), date.getUTCMinutes () - 2);
    t.is (twoSecondsEarlier.getUTCSeconds (), date.getUTCSeconds () - 2);
    t.is (twoMSEarlier.getUTCMilliseconds (), date.getUTCMilliseconds () - 2);
});

test ('also takes short forms as valid inputs', t => {
    const date = new Date (2017, 5, 16, 12, 30, 30, 500);
    const twoYearsEarlier = new Dateful (date).subtract (2, 'y').value ();
    const twoMonthsEarlier = new Dateful (date).subtract (2, 'M').value ();
    const twoWeeksEarlier = new Dateful (date).subtract (2, 'w').value ();
    const twoDaysEarlier = new Dateful (date).subtract (2, 'd').value ();
    const twoHoursEarlier = new Dateful (date).subtract (2, 'h').value ();
    const twoMinutesEarlier = new Dateful (date).subtract (2, 'm').value ();
    const twoSecondsEarlier = new Dateful (date).subtract (2, 's').value ();
    const twoMSEarlier = new Dateful (date).subtract (2, 'ms').value ();

    t.is (twoYearsEarlier.getUTCFullYear (), date.getUTCFullYear () - 2);
    t.is (twoMonthsEarlier.getUTCMonth (), date.getUTCMonth () - 2);
    t.is (twoWeeksEarlier.getUTCDate (), date.getUTCDate () - 14);
    t.is (twoDaysEarlier.getUTCDate (), date.getUTCDate () - 2);
    t.is (twoHoursEarlier.getUTCHours (), date.getUTCHours () - 2);
    t.is (twoMinutesEarlier.getUTCMinutes (), date.getUTCMinutes () - 2);
    t.is (twoSecondsEarlier.getUTCSeconds (), date.getUTCSeconds () - 2);
    t.is (twoMSEarlier.getUTCMilliseconds (), date.getUTCMilliseconds () - 2);
});
