'use strict';
const assert = require('assert');
const npmJanitor = require('./');

it('should return an array of json validator data. ', function (done) {
    this.timeout(15000);
    npmJanitor('hemanth', (err, data) => {
        assert.equal(data.length > 1, true, "Expected some data to be present!");
        done();
    });
});
