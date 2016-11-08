'use strict';
const registry = require('npm-stats')();
const packageJson = require('package-json');
const {PJV} = require('package-json-validator');
const {map} = require('async');
const asyncMap = map;

module.exports = (username, cb) => {
    if (typeof username !== 'string') {
        throw new TypeError('Expected a string');
    }
    registry.user(username).list( (err, modules) => {
        asyncMap(modules, (module, callback) => {
            packageJson(module, 'latest', (err, json) => {
                if (err) return callback(err);
                callback(null, {
                    module,
                    homepage: json.homepage,
                    description: json.description,
                    info : PJV.validate(JSON.stringify(json), "npm", {warnings: true, recommendations: true})
                });
            })
        }, (err, results) => {
            cb(err, results);
        });
    });
};

