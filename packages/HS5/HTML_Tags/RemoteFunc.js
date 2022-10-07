module.exports = {
    Command: function ({ input }) {
        let route = input[0];
        let last = input[input.length - 1];
        input.splice(0, 1);
        input.splice(input.length - 1, 1);

        let varThings = '';
        if (input.length > 0) {
            varThings = `let [${input.join(', ')}] = req.body.data;`;
        }

        return `/* API POINTER */ 
        MainExpressAPP["post"]("/api/" + "${route}", (req, res) => {
            ${varThings}
            ${last}
        });
        /* END OF API POINTER */`.replace(/[\r\n]/gm, '');
    },
    Dependencies: function () {
        return false;
    },
};
