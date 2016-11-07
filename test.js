'use strict';
var assert = require('assert');
var npmJanitor = require('./');

it('should return an array of json validator data. ', function (done) {
    this.timeout(150000);
    npmJanitor('hemanth', (err, data) => {
        assert.equal(data.length > 1, true, "Expected some data to be present!");
        done();
    });
});
