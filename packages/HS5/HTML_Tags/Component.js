const { v4 } = require('uuid');

module.exports = {
    Command: function ({ input }) {
        let start = input[0];
        let rest = input.slice(1);
        return `${start}(${rest.join(',')}, "${v4()}");`;
    },
    Dependencies: function () {
        return false;
    },
};
