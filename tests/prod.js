var app_1 = require('../lib/index.js');
var express = require('express');

let app = express();

app_1.default({
    injectJS: true,
    SSR: true,
    server: app,
    port: 3000,
});
