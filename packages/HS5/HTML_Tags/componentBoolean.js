let div = require('./div');
module.exports = {
    Command: function ({ input }) {
        let arrayToSend = ['""', '', input[3], `booleanComponentRendering(${input[0]}, ${input[1]}, ${input[2]})`];
        let string = div.Command({ input: arrayToSend });
        return string;
    },
    Dependencies: function () {
        return false;
    },
};
