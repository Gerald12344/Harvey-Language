const { v4: uuidv4 } = require('uuid');

const BoilerPlater = require('./BOILERPLATE.js');

module.exports = {
    Command: function ({ input }) {
        let href = input[2];
        return BoilerPlater({
            input,
            inject: `
                ElementWeWant.Element.href = ${href};
                MontiorInputsPreventDefault(InternalUUID, "click", (value) => {
                    if (!(${href} === window.location.pathname)) {
                        history.move(${href});
                    }
                });;
            `,
            typeIn: 'a',
            splice: 3,
            SSR: {
                href,
            },
        });
    },
    Dependencies: function () {
        return false;
    },
};
