const { v4: uuidv4 } = require('uuid');

const BoilerPlater = require('./BOILERPLATE.js');
const FindStart = require('./FindStart.js');

module.exports = {
    Command: function ({ input }) {
        let src = FindStart(input, '??src: ');

        return BoilerPlater({
            input,
            inject: `ElementWeWant.Element.setAttribute("src", ${src});`,
            typeIn: 'img',
            splice: 3,
            SSR: {
                src,
            },
        });
    },
    Dependencies: function () {
        return false;
    },
};
