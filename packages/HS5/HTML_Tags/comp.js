module.exports = {
    Command: function ({ input }) {
        let name = input[0];
        input.splice(0, 1);
        return `${name}(parent, ${input.join(',')})`;
    },
    Dependencies: function () {
        return false;
    },
};
