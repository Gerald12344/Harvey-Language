const { v4 } = require('uuid');
let div = require('./div');
module.exports = {
    Command: function ({ input }) {
        let arrayToSend = [
            '""',
            '',
            input[3],
            `(() => {let CompId = ""; if (!(typeof myId === 'undefined')) {CompId = myId};booleanComponentRendering(parent, ${input.join(
                ', ',
            )}, CompId ?? "")})();`,
        ];
        let string = div.Command({ input: arrayToSend });
        return `${string}`;
    },
    Dependencies: function () {
        return false;
    },
};
