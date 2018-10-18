'use strict';
// utils is a library of generic helper functions

var data = Object.prototype.toString;

/**
 * Determine if a value is an array
 * value - data to check the datatype
 * returns true if value is an array else false
 */
function isArray(value) {
    return data.call(value) === '[object Array]';
}

/**
 * Determine if a value is a string
 * value - data to check the datatype
 * returns true if value is a string else false
 */
function isString(value) {
    return typeof value === 'string';
}

/**
 * Determine if a value is a number
 * value - data to check the datatype
 * returns true if value is a number else false
 */
function isNumber(value) {
    return typeof value === 'number';
}

/**
 * Determine if a value is an object
 * value - data to check the datatype
 * returns true if value is an object else false
 */
function isObject(value) {
    return value !== null && typeof value === 'object';
}

/**
 * Determine if a value is undefined
 * value - data to check the datatype
 * returns true if value is undefined else false
 */
function isUndefined(value) {
    return typeof value === 'undefined';
}

/**
 * Determine if a value is a date
 * value - data to check the datatype
 * returns true if value is a date else false
 */
function isDate(value) {
    return toString.call(value) === '[object Date]';
}

/**
 * Determine if a value is boolean
 * value - data to check the datatype
 * returns true if value is boolean else false
 */
function isBoolean(value) {
    return typeof value === 'boolean';
}

/**
 * Determine if a value is a function
 * value - data to check the datatype
 * returns true if value is a function else false
 */
function isFunction(value) {
    return toString.call(value) === '[object Function]';
}

/**
 * Remove blank spaces from the start and end of a string
 * value - data to trim
 * returns trimmed string
 */
function trim(value) {
    return value.replace(/^\s*/, '').replace(/\s*$/, '');
}

module.exports = {
    isArray: isArray,
    isString: isString,
    isNumber: isNumber,
    isObject: isObject,
    isUndefined: isUndefined,
    isDate: isDate,
    isBoolean: isBoolean,
    isFunction: isFunction,
    trim: trim
};