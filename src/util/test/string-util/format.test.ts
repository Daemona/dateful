import {format} from '../../string-util';
import test from 'ava';

const date = new Date (Date.UTC (2017, 6, 27, 12, 37, 23, 400));

test ('takes a string representing the format required, and returns a string that follows that format', t => {
    t.is (format (date, 'YYYY-MM-DD'), '2017-07-27');
});

test ('can produce the year in long (4 digits) or short (2 digits) form', t => {
    t.is (format (date, 'YYYY'), '2017');
    t.is (format (date, 'YY'), '17');
});

test ('can produce the week-date (number of weeks since the start of the year, optionally with day of the week)', t => {
    t.is (format (date, 'Www'), 'W30');
    t.is (format (date, 'Www-D'), 'W30-4');
});

test ('can produce the ordinal date (number of days since the start of the year)', t => {
    t.is (format (date, 'DDD'), '208');
});

test ('can produce the full name (in English) of the day of the week', t => {
    t.is (format (date, 'Day'), 'Thursday');
});

test ('can produce the full name (in English) of the month', t => {
    t.is (format (date, 'Month'), 'July');
});

test ('can produce the short form of the name (in English) of the month', t => {
    t.is (format (date, 'Mnth'), 'Jul');
});

test ('can produce the ordinal version (1st, 2nd, 3rd instead of 1, 2, 3) of the date', t => {
    t.is (format (date, 'Dth'), '27th');
    t.is (format (new Date (Date.UTC (2017, 6, 1)), 'Dth'), '1st');
    t.is (format (new Date (Date.UTC (2017, 6, 2)), 'Dth'), '2nd');
    t.is (format (new Date (Date.UTC (2017, 6, 3)), 'Dth'), '3rd');
});

test ('can produce the hours (in 24-hour time)', t => {
    t.is (format (date, 'hh'), '12');
});

test ('can produce the minutes', t => {
    t.is (format (date, 'mm'), '37');
});

test ('can produce the seconds', t => {
    t.is (format (date, 'ss'), '23');
});

test ('can produce fractions of seconds (milliseconds)', t => {
    t.is (format (date, 'ss.sss'), '23.400');
    t.is (format (date, 'ss.ss'), '23.40');
    t.is (format (date, 'ss.s'), '23.4');
});

test ('can produce fractions of minutes or hours as well, as per ISO 8601', t => {
    t.is (format (date, 'mm.mmm'), '37.390');
    t.is (format (date, 'mm.mm'), '37.39');
    t.is (format (date, 'mm.m'), '37.4');

    t.is (format (date, 'hh.hhh'), '12.623');
    t.is (format (date, 'hh.hh'), '12.62');
    t.is (format (date, 'hh.h'), '12.6');
});

test ('can produce more complex date strings by combining parts', t => {
    t.is (format (date, 'Day, Dth Month YYYY'), 'Thursday, 27th July 2017');
    t.is (format (date, 'YYYY-MM-DDThh:mm:ss.sssZ'), '2017-07-27T12:37:23.400Z');
    t.is (format (date, 'DD Mnth YY @ hh:mm'), '27 Jul 17 @ 12:37');
});
