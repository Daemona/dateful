import test from 'ava';
import {dateful} from '../factory';
import {Dateful} from '../class/dateful-class';

test ('always returns an instance of the internal Dateful class', t => {
    const now = dateful ();
    t.true (now instanceof Dateful);

    const stAndrewsDay = dateful (2016, 10, 30);
    t.true (stAndrewsDay instanceof Dateful);

    const theEpoch = dateful (0);
    t.true (theEpoch instanceof Dateful);

    const todaysDate = dateful (new Date ());
    t.true (todaysDate instanceof Dateful);

    const clone = dateful (dateful ());
    t.true (clone instanceof Dateful);
});

test ('when passed no params, returns a Dateful representing the current time', t => {
    const nowDateful = dateful ();
    const nowDate = new Date ();

    t.is (nowDateful.value ().getUTCFullYear (), nowDate.getUTCFullYear ());
    t.is (nowDateful.value ().getUTCMonth (), nowDate.getUTCMonth ());
    t.is (nowDateful.value ().getUTCDate (), nowDate.getUTCDate ());
    t.is (nowDateful.value ().getUTCHours (), nowDate.getUTCHours ());
    t.is (nowDateful.value ().getUTCMinutes (), nowDate.getUTCMinutes ());
    t.is (nowDateful.value ().getUTCSeconds (), nowDate.getUTCSeconds ());
});

test ('when passed one number param, takes it as Unix time and creates a Dateful from that', t => {
    // 100000000ms = 1 day, 3 hrs, 46 mins, 40 secs
    t.is (dateful (100000000).toString (), '1970-01-02T03:46:40.000Z');
});

test ('when passed a Date object, returns a Dateful wrapping a clone of that Date', t => {
    const date = new Date ();
    const wrapped = dateful (date);

    t.not (wrapped.value (), date);
    t.is (wrapped.value ().toISOString (), date.toISOString ());
});

test ('when passed a Dateful, returns a clone of that Dateful', t => {
    const dateful1 = dateful ();
    const dateful2 = dateful (dateful1);

    t.not (dateful1, dateful2);
    t.not (dateful1.value (), dateful2.value ()); // The wrapped Date is also a clone

    t.deepEqual (dateful1, dateful2);
});

test ('when passed more than one number, uses them as the year, month, date, hours, minutes, seconds and milliseconds to build a Dateful', t => {
    const thisTestWasWrittenAt = dateful (2017, 6, 27, 10, 36, 15, 233);

    t.is (thisTestWasWrittenAt.toString (), '2017-07-27T10:36:15.233Z');
});

test ('when some of the numbers are dropped from the params, defaults to the lowest possible value', t => {
    const noMilliseconds = dateful (2017, 6, 27, 10, 36, 15);
    const noSeconds      = dateful (2017, 6, 27, 10, 36);
    const noMinutes      = dateful (2017, 6, 27, 10);
    const noHours        = dateful (2017, 6, 27);
    const noDays         = dateful (2017, 6);

    t.is (noMilliseconds.toString (), '2017-07-27T10:36:15.000Z');
    t.is (noSeconds.toString (),      '2017-07-27T10:36:00.000Z');
    t.is (noMinutes.toString (),      '2017-07-27T10:00:00.000Z');
    t.is (noHours.toString (),        '2017-07-27T00:00:00.000Z');
    t.is (noDays.toString (),         '2017-07-01T00:00:00.000Z');
});
