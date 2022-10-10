module.exports = {
    Command: function ({ input }) {
        return `??class: ${input[0]}`;
    },
    Dependencies: function () {
        return false;
    },
};
