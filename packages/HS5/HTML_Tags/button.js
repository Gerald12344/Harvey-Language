const BoilerPlater = require('./BOILERPLATE.js');

module.exports = {
    Command: function ({ input }) {
        let clickCallback = input[2];

        return BoilerPlater({
            input,
            inject: `${
                typeof clickCallback !== 'undefined'
                    ? `ElementWeWant.Element.addEventListener("click", function(e) {${clickCallback}; }); `
                    : ''
            }`,
            typeIn: 'button',
            splice: 3,
        });
    },
    Dependencies: function () {
        return false;
    },
};
