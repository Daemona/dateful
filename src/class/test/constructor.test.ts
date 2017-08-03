import test from 'ava';
import {Dateful} from '../dateful-class';

test ('can take a Date as parameter and stores a clone of that Date', t => {
    const date = new Date ();
    const dateful = new Dateful (date);

    t.not (dateful.value (), date);
    t.deepEqual (dateful.value (), date);
});

test ('can take a Dateful as parameter and clones that Dateful', t => {
    const dateful1 = new Dateful (new Date ());
    const dateful2 = new Dateful (dateful1);

    t.not (dateful1, dateful2);
    t.not (dateful1.value (), dateful2.value ());
    t.deepEqual (dateful1, dateful2);
});

test ('takes an optional boolean parameter that determines whether to undo the effects of the timezone offset', t => {
    const date = new Date ();
    const offset = date.getTimezoneOffset ()*60*1000;// in ms
    const offByABit = new Dateful (date);
    const fixed = new Dateful (date, true);

    t.is (fixed.valueOf (), offByABit.valueOf () - offset);
});
