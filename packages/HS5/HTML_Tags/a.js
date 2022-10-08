const { v4: uuidv4 } = require('uuid');

const BoilerPlater = require('./BOILERPLATE.js');

function findStart(loop, check) {
    for (let i = 0; i < loop.length; i++) {
        if (loop[i].startsWith(check)) {
            try {
                return `${loop[i].replace(check, '')}`;
            } catch (e) {
                return '';
            }
        }
    }
}

module.exports = {
    Command: function ({ input }) {
        let href = findStart(input, '??href: ');
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
