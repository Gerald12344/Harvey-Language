const { v4: uuidv4 } = require('uuid');

const BoilerPlater = require('./BOILERPLATE.js');

module.exports = {
    Command: function ({ input }) {
        let src = input[2];

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
