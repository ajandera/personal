module.exports = {
    assets: {
        files: [
            {expand: true, src: "**", cwd: 'node_modules/font-awesome/fonts', dest: "assets/fonts"},
            {expand: true, src: "**", cwd: 'img', dest: "assets/img"}
        ]
    }
};