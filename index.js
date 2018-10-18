'use strict';

var utils = require('./utils/utils');
//var request = require('./lib/requests');
var configData = {};

/**
 * Constructor
 */
var requestSdk = function (configData) {

    if (!utils.isObject(configData)) {
        throw new Error('Configuration data must be an object.');
    }
    if (!configData.hasOwnProperty("basePath")) {
        throw new Error('Base path missing in configuration data.');
    }
};

module.exports = requestSdk;