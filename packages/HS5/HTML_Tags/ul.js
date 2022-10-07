const BoilerPlater = require('./BOILERPLATE.js');

module.exports = {
    Command: function ({ input }) {
        return BoilerPlater({
            input,
            inject: '',
            typeIn: 'ul',
        });
    },
    Dependencies: function () {
        return false;
    },
};
