module.exports = {
    Command: function (input) {
        let propss = [...input];
        propss.splice(0, 1).join(',');
        propss.forEach((e, i) => {
            if (i + 1 === propss.length) return;
            propss[i] = e.replace('"', '').replace('"', '');
        });
        let last = propss[propss.length - 1];
        propss.splice(propss.length - 1, 1);
        return `/* ROUTER POINT FOR SSR */ function ${input[0].replace('"', '').replace('"', '')}(${propss.join(
            ',',
        )}){${last}} /* END OF ROUTER POINT FOR SSR */`;
    },
    Dependencies: function () {
        return false;
    },
};
