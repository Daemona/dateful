import test from 'ava';
import {isDateful, isDate, isNumber, isUndefined, isArray, isBoolean} from '../type-util';
import {Dateful} from "../../class/dateful-class";
import {dateful} from "../../factory";

test ('isDateful returns true if passed an object of type Dateful', t => {
    t.true (isDateful (new Dateful (new Date ())));
    t.true (isDateful (dateful ([2017, 6, 27])));
});

test ('isDateful returns false if passed anything other than a Dateful', t => {
    t.false (isDateful (new Date ()));
    t.false (isDateful ('dateful'));
    t.false (isDateful (2017));
    t.false (isDateful (void 0));
    t.false (isDateful (null));
    t.false (isDateful ({}));
    t.false (isDateful ([]));
});

test ('isDate returns true if passed an object of type Date', t => {
    t.true (isDate (new Date ()));
});

test ('isDate returns false if passed anything other than a Date', t => {
    t.false (isDate (new Dateful (new Date ())));
    t.false (isDate ('date'));
    t.false (isDate (2017));
    t.false (isDate (void 0));
    t.false (isDate (null));
    t.false (isDate ({}));
    t.false (isDate ([]));
});

test ('isNumber returns true if passed a number', t => {
    t.true (isNumber (23));
    t.true (isNumber (Number.NaN));
    t.true (isNumber (Number.POSITIVE_INFINITY));
    t.true (isNumber (Number.parseInt ('23')));
});

test ('isNumber returns false if passed anything other than a number', t => {
    t.false (isNumber (new Date ()));
    t.false (isNumber ('dateful'));
    t.false (isNumber (void 0));
    t.false (isNumber (null));
    t.false (isNumber ({}));
    t.false (isNumber ([]));
});

test ('isDateful returns true if passed an object of type Dateful', t => {
    const obj = {};
    t.true (isUndefined (undefined));
    t.true (isUndefined (void 0));
    t.true (isUndefined (obj['nothingToSeeHere']));
});

test ('isDateful returns false if passed anything other than a Dateful', t => {
    t.false (isUndefined (new Date ()));
    t.false (isUndefined ('dateful'));
    t.false (isUndefined (2017));
    t.false (isUndefined (null));
    t.false (isUndefined ({}));
    t.false (isUndefined ([]));
});

test ('isArray returns true if passed an array', t => {
    t.true (isArray ([]));
    t.true (isArray (new Array (5)));
    t.true (isArray (returnArray (1, 2, 3)));

    function returnArray (...args) {
        return args;
    }
});

test ('isArray returns false if passed anything other than an array', t => {
    t.false (isArray (new Date ()));
    t.false (isArray ('dateful'));
    t.false (isArray (void 0));
    t.false (isArray (23));
    t.false (isArray (null));
    t.false (isArray ({}));
});

test ('isBoolean returns true if passed a boolean', t => {
    t.true (isBoolean (true));
    t.true (isBoolean (false));
    t.true (isBoolean (!0));
});

test ('isBoolean returns false if passed anything other than a boolean', t => {
    t.false (isBoolean (new Date ()));
    t.false (isBoolean ('dateful'));
    t.false (isBoolean (void 0));
    t.false (isBoolean (23));
    t.false (isBoolean (null));
    t.false (isBoolean ({}));
    t.false (isBoolean ([]));
});
