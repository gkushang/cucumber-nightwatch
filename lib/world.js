'use strict';

var cucumberNightWatch = require('./cucumber-nightwatch');
var nightwatch = cucumberNightWatch.nightwatch;
var Promise = require('bluebird');

function World() {
    var _this = this;

    return new Promise(function(resolve, reject) {
        _this.clientObjects = cucumberNightWatch.startClient();
        _this.browser = _this.clientObjects.browser;
        _this.client = _this.clientObjects.client;
        _this.cucumberNightWatch = cucumberNightWatch;
        setTimeout(function() {
            resolve();
        }, 2000);
    });

}

module.exports = function() {
    this.World = World;
};
