import test from 'ava';
import {Dateful} from '../dateful-class';

test ('takes a string representing a format and outputs a string that shows the date in that format', t => {
    const result = new Dateful (new Date (Date.UTC (2017, 6, 27)))
        .format ('YYYY-MM-DD');
    t.is (result, '2017-07-27');
});
