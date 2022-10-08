const sass = require('sass');

module.exports = {
    Command: function ({ input }) {
        let result = sass.compileString(input[0].replace(/\"/g, ''));

        return `text: "${result.css.toString().replace(/\n/g, '')}"`;
    },
    Dependencies: function () {
        return false;
    },
};
