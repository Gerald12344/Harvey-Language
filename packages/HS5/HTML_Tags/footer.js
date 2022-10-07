const BoilerPlater = require('./BOILERPLATE.js');

module.exports = {
    Command: function ({ input }) {
        return BoilerPlater({
            input,
            inject: '',
            typeIn: 'footer',
        });
    },
    Dependencies: function () {
        return false;
    },
};
