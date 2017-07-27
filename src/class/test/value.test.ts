import test from 'ava';
import {Dateful} from '../dateful-class';

test ('Returns its internal Date object (a clone of the original Date)', t => {
    const date = new Date ();
    const dateful = new Dateful (date);

    t.not (date, dateful.value ());
    t.true (dateful.value () instanceof Date);
    t.is (date.valueOf (), dateful.value ().valueOf ());
});
