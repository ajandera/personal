module.exports = {
    assets: {
        files: {
            "index.html": "src/index.html"
        },
        options: {
            replacements: [
                {
                    pattern: /TIMESTAMP/g,
                    replacement: "<%= new Date().getTime() %>"
                }
            ]
        }
    }
};

