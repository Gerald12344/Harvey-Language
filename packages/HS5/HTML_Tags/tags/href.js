module.exports = {
    Command: function ({ input }) {
        return `??href: ${input[0]}`;
    },
    Dependencies: function () {
        return false;
    },
};
