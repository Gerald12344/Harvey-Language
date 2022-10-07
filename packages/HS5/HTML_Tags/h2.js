const BoilerPlater = require('./BOILERPLATE.js');

module.exports = {
    Command: function ({ input }) {
        return BoilerPlater({
            input,
            inject: '',
            typeIn: 'h2',
        });
    },
    Dependencies: function () {
        return false;
    },
};
