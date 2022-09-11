module.exports = {
    Command: function ({ input }) {
        return `${input.map((e) => `_INTERNAL_UUID_USED_FOR_STYLES + "_" + "${e}"`).join(' + " " + ')}`;
    },
    Dependencies: function () {
        return false;
    },
};
