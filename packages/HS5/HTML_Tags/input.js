const { v4: uuidv4 } = require('uuid');
const BoilerPlater = require('./BOILERPLATE.js');
const FindStart = require('./tags/FindStart.js');

module.exports = {
    Command: function ({ input }) {
        let type = FindStart(input, '??typeIn: ');

        return BoilerPlater({
            input,
            inject: `ElementWeWant.Element.type = ${type};`,
            typeIn: 'input',
            splice: 4,
            SSR: {
                Type: type,
            },
        });
    },
    Dependencies: function () {
        return false;
    },
};
