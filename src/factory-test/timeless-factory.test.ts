import test from 'ava';
import {timeless, dateful} from '../factory';
import {Dateful} from '../class/dateful-class';

test ('takes the same parameters as the factory function `dateful`, and returns a Dateful', t => {
    const timeless1 = timeless ();
    const timeless2 = timeless (new Date ());
    const timeless3 = timeless (dateful ());
    const timeless4 = timeless (0);
    const timeless5 = timeless ([2017, 0, 1]);

    t.true (timeless1 instanceof Dateful);
    t.true (timeless2 instanceof Dateful);
    t.true (timeless3 instanceof Dateful);
    t.true (timeless4 instanceof Dateful);
    t.true (timeless5 instanceof Dateful);
});

test ('returns a Dateful that is in timeless mode (h,m,s,ms are zero and immutable)', t => {
    const timeless1 = timeless ();

    t.is (timeless1.value ().getUTCHours (), 0);
    t.is (timeless1.value ().getUTCMinutes (), 0);
    t.is (timeless1.value ().getUTCSeconds (), 0);
    t.is (timeless1.value ().getUTCMilliseconds (), 0);

    timeless1.add (20, 'minutes');
    t.is (timeless1.value ().getUTCMinutes (), 0);
});
