import test from 'ava';
import {Dateful} from '../dateful-class';

test ("Returns the result of its internal Date object's toISOString method", t => {
    const date = new Date ();
    const dateful = new Dateful (date);

    t.is (date.toISOString (), dateful.toString ());
});
