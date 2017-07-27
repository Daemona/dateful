import test from 'ava';
import {Dateful} from '../dateful-class';

test ("Returns the result of its internal Date object's valueOf method", t => {
    const date = new Date ();
    const dateful = new Dateful (date);

    t.is (date.valueOf (), dateful.valueOf ());
});
