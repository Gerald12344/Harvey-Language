module.exports = {
    Command: function ({ input }) {
        let url = input[0];
        let loadingText = input[1];

        input.splice(0, 2);

        let dataInput = 'let dataInput = JSON.stringify({});';
        if (input.length > 0) {
            dataInput = `let dataInput = JSON.stringify({ data: [${input}] });`;
        }

        return `/* DATA FETCH */ 
        await (await (async () => {
            if (typeof Hydration === 'undefined') {
                ${dataInput}
                return fetch("/api/" + "${url}", {method:"post", body: dataInput, headers:{'Content-Type':'application/json'}});
            } else {
                return new Promise((resolve, reject) => {
                    resolve({text: () => ${loadingText}});
                });
            };
        })()).text()
        /* END OF DATA FETCH */`.replace(/[\r\n]/gm, '');
    },
    Dependencies: function () {
        return false;
    },
};
