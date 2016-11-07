'use strict';
var registry = require('npm-stats')();
var packageJson = require('package-json');
var PJV = require('package-json-validator').PJV;
var asyncMap = require('async').map;

module.exports = function (username, cb) {
    if (typeof username !== 'string') {
        throw new TypeError('Expected a string');
    }
    registry.user(username).list( function (err,modules) {
        asyncMap(modules, function(module, callback) {
            packageJson(module, 'latest', function (err, json) {
                if (err) return callback(err);
                callback(null, {
                    module: module,
                    homepage: json.homepage,
                    info : PJV.validate(JSON.stringify(json), "npm", {warnings: true, recommendations: true})
                });
            })
        }, function(err, results) {
            cb(err, results);
        });
    });
};

