var nightwatch = require('nightwatch');

var exports = module.exports = {};
var cliRunner;

function cucumberNightwatch() {
    nightwatch.cli(function(argv){
        cliRunner = nightwatch.CliRunner(argv);
    });

    cliRunner.setup();
}

function startClient() {
    var client = nightwatch.initClient(cliRunner.test_settings);
    var browser = client.api();

    var clientOptions = client.get();
    clientOptions.options.output = false;
    cliRunner.startSelenium();

    return {
        browser: browser,
        client: client
    };
}

function stopClient() {
    cliRunner.stopSelenium();
}

cucumberNightwatch();
exports.startClient = startClient;
exports.stopClient = stopClient;
exports.World = require('./world');
