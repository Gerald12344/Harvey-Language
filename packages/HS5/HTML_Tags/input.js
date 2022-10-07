const { v4: uuidv4 } = require('uuid');
const BoilerPlater = require('./BOILERPLATE.js');

module.exports = {
    Command: function ({ input }) {
        let Parent = input[0];
        let className = input[1];
        let type = input[2];
        let reactiveFunc = input[3];
        input.splice(0, 4);
        let Children = input.join(';');
        let secondPart = '';
        if (Children !== '') {
            secondPart = `((parent) => {${Children}})(InternalUUID)`;
        }
        return `
        (() => {
            let InternalUUID = (typeof itteration_ID === "undefined" ? "" :  itteration_ID) + "${uuidv4()}"; 
            let ElementWeWant = ReactfulElement('input',${Parent},parent, InternalUUID, ${className}, {
                SSR: {
                    Type: ${type}
                }
            }); 
            try {
                ElementWeWant.Element.type = ${type};
                ElementWeWant.Element.addEventListener("input", function(e) { ${reactiveFunc}(e.target.value); }); 
            } catch {};
            components.push(ElementWeWant); 
            ${secondPart}
        })();`.replace(/[\r\n]/gm, '');
    },
    Dependencies: function () {
        return false;
    },
};
