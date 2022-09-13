module.exports = {
    Command: function ({ input }) {
        let propss = [...input];
        propss.splice(0, 1).join(',');
        propss.forEach((e, i) => {
            if (i + 1 === propss.length) return;
            propss[i] = e.replace('"', '').replace('"', '');
        });
        let last = propss[propss.length - 1];
        propss.splice(propss.length - 1, 1);
        return `/* API POINTER */ 
        MainExpressAPP["get"]("/api/" + "${input[0]}", (req, res) => {
            ${last}
        });
        /* END OF API POINTER */`.replace(/[\r\n]/gm, '');
    },
    Dependencies: function () {
        return false;
    },
};
