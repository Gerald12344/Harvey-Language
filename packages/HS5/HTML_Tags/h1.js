const BoilerPlater = require('./BOILERPLATE.js');

module.exports = {
    Command: function ({ input }) {
        return BoilerPlater({
            input,
            inject: '',
            typeIn: 'h1',
        });
    },
    Dependencies: function () {
        return false;
    },
};
