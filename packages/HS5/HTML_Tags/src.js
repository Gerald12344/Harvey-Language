module.exports = {
    Command: function ({ input }) {
        return `??src: ${input[0]}`;
    },
    Dependencies: function () {
        return false;
    },
};
