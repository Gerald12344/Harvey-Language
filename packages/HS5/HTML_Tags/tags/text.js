module.exports = {
    Command: function ({ input }) {
        return `??text: ${input[0]}`;
    },
    Dependencies: function () {
        return false;
    },
};
