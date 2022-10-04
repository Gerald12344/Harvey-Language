module.exports = {
    Command: function ({ input }) {
        return `useHookArray(${input[0]})`;
    },
    Dependencies: function () {
        return false;
    },
};
