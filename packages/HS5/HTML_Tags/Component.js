const { v4 } = require('uuid');

module.exports = {
    Command: function ({ input }) {
        let start = input[0];
        let rest = input.slice(1);
        return `${start}(InternalUUID, ${rest.join(',')}${rest.length > 0 ? ',' : ''} "${v4()}");`;
    },
    Dependencies: function () {
        return false;
    },
};
