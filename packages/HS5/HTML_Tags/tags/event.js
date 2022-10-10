module.exports = {
    Command: function ({ input }) {
        return `??event: ${input[0]}|${input[1]}`;
    },
    Dependencies: function () {
        return false;
    },
};
