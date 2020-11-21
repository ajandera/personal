module.exports = {
    watch: {
        files: ['src/css/*.css', 'src/js/*.js', 'src/index.html'],
        tasks: [
            'clean:assets',
            'copy:assets',
            'concat:assets',
            'cssmin:assets',
            'uglify:assets',
            'string-replace:assets'
        ]
    }
}