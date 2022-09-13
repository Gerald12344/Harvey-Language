module.exports = {
    Command: function ({ input }) {
        return `if(typeof input === "object"){res.json(${input[0]})}else{res.send(${input[0]})}`;
    },
    Dependencies: function () {
        return false;
    },
};
