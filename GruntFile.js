module.exports = function(grunt) {
    var gtx = require('gruntfile-gtx').wrap(grunt);

    gtx.loadAuto();

    var gruntConfig = require('./grunt');
    gruntConfig.package = require('./package.json');

    gtx.config(gruntConfig);

    gtx.alias('build:assets', [
        'clean:assets',
        'copy:assets',
        'concat:assets',
        'cssmin:assets',
        'uglify:assets'
    ]);

    gtx.finalise();
};