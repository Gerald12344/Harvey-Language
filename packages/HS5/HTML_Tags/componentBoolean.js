const { v4 } = require('uuid');

const BoilerPlater = require('./BOILERPLATE.js');

module.exports = {
    Command: function ({ input }) {
        return BoilerPlater({
            input: [],
            inject: `(() => {let CompId = ""; if (!(typeof myId === 'undefined')) {CompId = myId};booleanComponentRendering(InternalUUID, ${input.join(
                ', ',
            )}, CompId ?? "")})();`,
            typeIn: 'div',
        });
    },
    Dependencies: function () {
        return false;
    },
};
