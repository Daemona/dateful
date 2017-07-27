import test from 'ava';
import {Dateful} from '../dateful-class';

test ('returns true when a valid date has been passed to the constructor', t => {
    const valid = new Dateful (new Date ());

    t.true (valid.isValid());
});

test ('returns false when an invalid date has been passed to the constructor', t => {
    const invalid = new Dateful (new Date ('wibble'));

    t.false (invalid.isValid ());
});
