import test from 'ava';
import {Dateful} from '../dateful-class';

test ('removes the effect of the local timezone on the Date by subtracting the offset', t => {
    const date = new Date ();
    const offset = date.getTimezoneOffset () / 60; //in hours
    const fixedDate = new Dateful (date).cancelTimezoneOffset ().value ();

    t.is (fixedDate.getUTCHours (), date.getUTCHours () - offset);
});
