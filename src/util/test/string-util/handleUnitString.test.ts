import test from 'ava';
import {handleUnitString} from "../../string-util";
import {UNITS} from "../../constants";

test ('converts a string that is an abbreviation of "millennia" into UNITS.MILLENNIUM', t => {
    t.is (handleUnitString ('millennium'),  UNITS.MILLENNIUM);
    t.is (handleUnitString ('millennia'),   UNITS.MILLENNIUM);
    t.is (handleUnitString ('millenniums'), UNITS.MILLENNIUM);
    t.is (handleUnitString ('kyear'),       UNITS.MILLENNIUM);
    t.is (handleUnitString ('kyr'),         UNITS.MILLENNIUM);
    t.is (handleUnitString ('ky'),          UNITS.MILLENNIUM);
    t.is (handleUnitString ('kyrs'),        UNITS.MILLENNIUM);
    t.is (handleUnitString ('kiloyear'),    UNITS.MILLENNIUM);
    t.is (handleUnitString ('kiloyears'),   UNITS.MILLENNIUM);
});

test ('converts a string that is an abbreviation of "centuries" into UNITS.CENTURY', t => {
    t.is (handleUnitString ('century'),   UNITS.CENTURY);
    t.is (handleUnitString ('centuries'), UNITS.CENTURY);
});

test ('converts a string that is an abbreviation of "decades" into UNITS.DECADE', t => {
    t.is (handleUnitString ('decade'),  UNITS.DECADE);
    t.is (handleUnitString ('decades'), UNITS.DECADE);
});

test ('converts a string that is an abbreviation of "years" into UNITS.YEAR', t => {
    t.is (handleUnitString ('y'),     UNITS.YEAR);
    t.is (handleUnitString ('yr'),    UNITS.YEAR);
    t.is (handleUnitString ('year'),  UNITS.YEAR);
    t.is (handleUnitString ('years'), UNITS.YEAR);
    t.is (handleUnitString ('yrs'),   UNITS.YEAR);
});

test ('converts a string that is an abbreviation of "months" into UNITS.MONTH', t => {
    t.is (handleUnitString ('M'),      UNITS.MONTH);
    t.is (handleUnitString ('mo'),     UNITS.MONTH);
    t.is (handleUnitString ('mth'),    UNITS.MONTH);
    t.is (handleUnitString ('month'),  UNITS.MONTH);
    t.is (handleUnitString ('months'), UNITS.MONTH);
});

test ('converts a string that is an abbreviation of "weeks" into UNITS.WEEK', t => {
    t.is (handleUnitString ('w'),     UNITS.WEEK);
    t.is (handleUnitString ('wk'),    UNITS.WEEK);
    t.is (handleUnitString ('wks'),   UNITS.WEEK);
    t.is (handleUnitString ('week'),  UNITS.WEEK);
    t.is (handleUnitString ('weeks'), UNITS.WEEK);
});

test ('converts a string that is an abbreviation of "days" into UNITS.DAY', t => {
    t.is (handleUnitString ('d'),    UNITS.DAY);
    t.is (handleUnitString ('day'),  UNITS.DAY);
    t.is (handleUnitString ('days'), UNITS.DAY);
});

test ('converts a string that is an abbreviation of "hours" into UNITS.HOUR', t => {
    t.is (handleUnitString ('h'),     UNITS.HOUR);
    t.is (handleUnitString ('hr'),    UNITS.HOUR);
    t.is (handleUnitString ('hrs'),   UNITS.HOUR);
    t.is (handleUnitString ('hour'),  UNITS.HOUR);
    t.is (handleUnitString ('hours'), UNITS.HOUR);
});

test ('converts a string that is an abbreviation of "minutes" into UNITS.MINUTE', t => {
    t.is (handleUnitString ('m'),       UNITS.MINUTE);
    t.is (handleUnitString ('min'),     UNITS.MINUTE);
    t.is (handleUnitString ('mins'),    UNITS.MINUTE);
    t.is (handleUnitString ('minute'),  UNITS.MINUTE);
    t.is (handleUnitString ('minutes'), UNITS.MINUTE);
});

test ('converts a string that is an abbreviation of "seconds" into UNITS.SECOND', t => {
    t.is (handleUnitString ('s'),       UNITS.SECOND);
    t.is (handleUnitString ('sec'),     UNITS.SECOND);
    t.is (handleUnitString ('secs'),    UNITS.SECOND);
    t.is (handleUnitString ('second'),  UNITS.SECOND);
    t.is (handleUnitString ('seconds'), UNITS.SECOND);
});

test ('converts a string that is an abbreviation of "milliseconds" into UNITS.MILLISECOND', t => {
    t.is (handleUnitString ('ms'),           UNITS.MILLISECOND);
    t.is (handleUnitString ('msec'),         UNITS.MILLISECOND);
    t.is (handleUnitString ('msecs'),        UNITS.MILLISECOND);
    t.is (handleUnitString ('millisecond'),  UNITS.MILLISECOND);
    t.is (handleUnitString ('milliseconds'), UNITS.MILLISECOND);
});

test ('if passed an unknown string, returns that string unchanged', t => {
    t.is (handleUnitString ('gibberish'), 'gibberish');
});
