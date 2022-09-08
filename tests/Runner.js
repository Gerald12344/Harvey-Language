/*
    Written by Harvey Randall to run in IDE tests without publish to NPM
*/
var watch_1 = require('../lib/utils/watch');
var settings_1 = require('../lib/utils/settings');
var logger_1 = require('../lib/utils/logger');
var path_1 = require('../lib/utils/pluginManager');

logger_1.CreateMainLogger();
path_1.loadHarvScript();

settings_1.loadSettings({
    debug: true,
    version: 'v1',
    evalOnCompile: false,

    outputFolder: 'dist',
    outputFileName: 'index.js',
    inputFolder: 'src',
    inputFile: 'index.harvey',
    debugFile: true,
    debugFileName: 'debug.js',
    debugFileLocation: 'dist',
    obuscateOutput: true,

    pluginsFolder: '',
    pluginsSettings: '',

    dev: true,
    watchmode: true,

    browserify: true,
});
watch_1.watchChangesWithWebServer();
