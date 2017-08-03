import test from 'ava';
import {Dateful} from '../dateful-class';

test ('if passed true, strips out the hours, minutes, seconds and milliseconds', t => {
    const date = new Date (Date.UTC (2017, 0, 1, 10, 10, 10, 100));
    const timeless = new Dateful (date).timeless (true).value ();

    t.is (date.getUTCMilliseconds (), 100);
    t.is (date.getUTCSeconds (),      10);
    t.is (date.getUTCMinutes (),      10);
    t.is (date.getUTCHours (),        10);

    t.is (timeless.getUTCMilliseconds (), 0);
    t.is (timeless.getUTCSeconds (),      0);
    t.is (timeless.getUTCMinutes (),      0);
    t.is (timeless.getUTCHours (),        0);
});

test ('if passed true, prevents subsequent changes to the time (h,m,s,ms)', t => {
    const date = new Date (Date.UTC (2017, 0, 1));
    const timeless = new Dateful (date).timeless (true);

    timeless.add (12, 'hours');

    t.is (timeless.value ().getUTCHours (), 0);
});

test ('if not given a parameter, defaults to true', t => {
    const date = new Date (Date.UTC (2017, 0, 1, 10, 10, 10, 100));
    const timeless = new Dateful (date).timeless ().value ();

    t.is (date.getUTCMilliseconds (), 100);
    t.is (date.getUTCSeconds (),      10);
    t.is (date.getUTCMinutes (),      10);
    t.is (date.getUTCHours (),        10);

    t.is (timeless.getUTCMilliseconds (), 0);
    t.is (timeless.getUTCSeconds (),      0);
    t.is (timeless.getUTCMinutes (),      0);
    t.is (timeless.getUTCHours (),        0);
});

test ('if passed false, allows the time (h,m,s,ms) to be altered', t => {
    const date = new Date (Date.UTC (2017, 0, 1));
    const timeless = new Dateful (date).timeless ();

    timeless.add (12, 'hours');
    t.is (timeless.value ().getUTCHours (), 0);// Unchanged

    const timeful = new Dateful (timeless).timeless (false);

    timeful.add (12, 'hours');
    t.is (timeful.value ().getUTCHours (), 12);// Changed
});
