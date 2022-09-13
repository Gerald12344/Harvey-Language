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

        return `/* DATA FETCH */ 
        await (await (async () => {
            if (typeof Hydration === 'undefined') {
                return fetch("/api/" + "${input[0]}");
            } else {
                return new Promise((resolve, reject) => {
                    resolve({text: () => ${input[1]}});
                });
            };
        })()).text()
        /* END OF DATA FETCH */`.replace(/[\r\n]/gm, '');
    },
    Dependencies: function () {
        return false;
    },
};
