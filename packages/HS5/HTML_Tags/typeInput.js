module.exports = {
    Command: function ({ input }) {
        return `??typeIn: ${input[0]}`;
    },
    Dependencies: function () {
        return false;
    },
};
