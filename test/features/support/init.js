'use strict';

const apickli = require('apickli');
const {Before, When, Then} = require('@cucumber/cucumber');
const bytesize = require('bytesize');
require('dotenv').config();

var {setDefaultTimeout} = require('@cucumber/cucumber');

setDefaultTimeout(30 * 1000);
//console.log(process.env.HOST)
Before(function() {
    this.apickli = new apickli.Apickli('https','sit.apim.pub.alpt.alticelabs.cloud');
    this.apickli.httpRequestOptions.strictSSL = false;
    this.apickli.addRequestHeader('Cache-Control', 'no-cache');
});

When(/^I test GET (.*) times to (.*)$/, function(times, resource, callback) {
    for (let index = 0; index < times; index++) {
        this.apickli.get(resource, function(error, response) {
            if (error) {
                callback(new Error(error));
            }
        });
    }
    callback();
});

When(/^I test GET with time (.*) to (.*)$/, function(time, resource, callback) {
    const timeStart = Date.now();
    this.apickli.get(resource, function(error, response) {
        if (error) {
            callback(new Error(error));
        }
        const dur = Date.now() - timeStart;
        if(dur > time) {
            callback(new Error(error));
        }
        callback();
    });
});

When(/^I test POST with time (.*) to (.*)$/, function(time, resource, callback) {
    const timeStart = Date.now();
    this.apickli.post(resource, function(error, response) {
        if (error) {
            callback(new Error(error));
        }
        const dur = Date.now() - timeStart;
        if(dur > time) {
            callback(new Error(error));
        }
        callback();
    });
});

When(/^I test PUT with time (.*) to (.*)$/, function(time, resource, callback) {
    const timeStart = Date.now();
    this.apickli.put(resource, function(error, response) {
        if (error) {
            callback(new Error(error));
        }
        const dur = Date.now() - timeStart;
        if(dur > time) {
            callback(new Error(error));
        }
        callback();
    });
});

When(/^I test DELETE with time (.*) to (.*)$/, function(time, resource, callback) {
    const timeStart = Date.now();
    this.apickli.delete(resource, function(error, response) {
        if (error) {
            callback(new Error(error));
        }
        const dur = Date.now() - timeStart;
        if(dur > time) {
            callback(new Error(error));
        }
        callback();
    });
});

When(/^I test PATCH with time (.*) to (.*)$/, function(time, resource, callback) {
    const timeStart = Date.now();
    this.apickli.patch(resource, function(error, response) {
        if (error) {
            callback(new Error(error));
        }
        const dur = Date.now() - timeStart;
        if(dur > time) {
            callback(new Error(error));
        }
        callback();
    });
});

Then(/^response size should not be bigger than (.*)$/, function(size, callback) {
    const body = this.apickli.getResponseObject().body;
    const bodySize = bytesize.stringSize(body);
    const headers = this.apickli.getResponseObject().headers;
    const headerSize = bytesize.stringSize(JSON.stringify(headers));
    if (bodySize + headerSize > size) {
        callback(new Error(error));
    }
    callback();
});

Then(/^response header size should not be bigger than (.*)$/, function(size, callback) {
    const headers = this.apickli.getResponseObject().headers;
    const headerSize = bytesize.stringSize(JSON.stringify(headers));
    if (headerSize > size) {
        callback(new Error(error));
    }
    callback();
});

Then(/^response body size should not be bigger than (.*)$/, function(size, callback) {
    const body = this.apickli.getResponseObject().body;
    const bodySize = bytesize.stringSize(body);
    if (bodySize > size) {
        callback(new Error(error));
    }
    callback();
});

Then(/^response body check oas$/, function(callback) {
    const body = this.apickli.getResponseObject().body;
    const schema = {
        type: "object",
        properties: {
            ndjstextResponse: {
                type: "object",
                properties: {
                    resultCoe: {
                        type: "string"
                    },
                    resultDesc: {
                        type: "string"
                    }
                }
            }
        }
    };
    const valid = ajv.validate(schema, JSON.parse(body))
    if (!valid) {
        callback(new Error(JSON.stringify(ajv.errors)));
    }
    callback();
});