const { v4: uuidv4 } = require('uuid');

const BoilerPlater = require('./BOILERPLATE.js');
const FindStart = require('./FindStart.js');

module.exports = {
    Command: function ({ input }) {
        let href = FindStart(input, '??href: ');
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
