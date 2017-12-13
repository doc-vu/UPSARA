'use strict';

var config = require('./config.webgme'),
    validateConfig = require('webgme/config/validator');

// Add/overwrite any additional settings here
config.server.port = 8080;
// config.mongo.uri = 'mongodb://127.0.0.1:27017/webgme_my_app';


// Seeds
config.seedProjects.enable = true;
config.seedProjects.basePaths = ["./seeds"]

// Icons
config.visualization.svgDirs.push('./icons/png');

validateConfig(config);
module.exports = config;
