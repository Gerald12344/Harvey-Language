module.exports = {
    Command: function ({ input }) {
        return `const [${input[0]},${input[1]}] = useHook(${input[2]}`;
    },
    Dependencies: function () {
        return false;
    },
};
