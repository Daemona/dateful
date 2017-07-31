import test from 'ava';
import {addTo} from "../../date-util";
import {UNITS} from "../../constants";

const start = new Date (Date.UTC (2017, 0, 1));

test ('when passed a number and "years" adds that many years to the Date', t => {
    const whereDoYouSeeYourself = new Date (start);
    addTo (5, UNITS.YEAR, whereDoYouSeeYourself);

    t.is (whereDoYouSeeYourself.getUTCFullYear (), start.getUTCFullYear () + 5);
});

test ('when passed a number and "months" adds that many months to the Date', t => {
    const threeTrimestersLater = new Date (start);
    addTo (9, UNITS.MONTH, threeTrimestersLater);

    t.is (threeTrimestersLater.getUTCMonth (), start.getUTCMonth () + 9);
});

test ('when passed a number and "week" adds that many weeks to the Date', t => {
    const sinceYouLookedAtMe = new Date (start);
    addTo (1, UNITS.WEEK, sinceYouLookedAtMe);

    t.is (sinceYouLookedAtMe.getUTCDate (), start.getUTCDate () + 7);
});

test ('when passed a number and "days" adds that many days to the Date', t => {
    const laterThereAreZombies = new Date (start);
    addTo (28, UNITS.DAY, laterThereAreZombies);

    t.is (laterThereAreZombies.getUTCDate (), start.getUTCDate () + 28);
});

test ('when passed a number and "hours" adds that many hours to the Date', t => {
    const fullTimeDay = new Date (start);
    addTo (8, UNITS.HOUR, fullTimeDay);

    t.is (fullTimeDay.getUTCHours (), start.getUTCHours () + 8);
});

test ('when passed a number and "minutes" adds that many minutes to the Date', t => {
    const pomodoro = new Date (start);
    addTo (25, UNITS.MINUTE, pomodoro);

    t.is (pomodoro.getUTCMinutes (), start.getUTCMinutes () + 25);
});

test ('when passed a number and "seconds" adds that many seconds to the Date', t => {
    const goneIn = new Date (start);
    addTo (60, UNITS.SECOND, goneIn);

    t.is (goneIn.getUTCSeconds (), start.getUTCSeconds ());
    t.is (goneIn.getUTCMinutes (), start.getUTCMinutes () + 1);
});

test ('when passed a number and "milliseconds" adds that many milliseconds to the Date', t => {
    const instantaneousUI = new Date (start);
    addTo (300, UNITS.MILLISECOND, instantaneousUI);

    t.is (instantaneousUI.getUTCMilliseconds (), start.getUTCMilliseconds () + 300);
});
