module.exports = {
    Command: function ({ input }) {
        // remove first and last character of string, input is array of strings
        let stringMain = input[0];
        let stringRest = stringMain.slice(1, stringMain.length - 1);

        return `${stringRest}`;
    },
    Dependencies: function () {
        return false;
    },
};
