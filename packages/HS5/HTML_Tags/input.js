const { v4: uuidv4 } = require('uuid');
module.exports = {
    Command: function ({ input }) {
        let uuid = uuidv4();
        let Parent = input[0];
        let className = input[1];
        let type = input[2];
        input.splice(0, 3);
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
                NewElement.Element.type = ${type};
            } catch {};
            components.push(ElementWeWant); 
            ${secondPart}
        })();`.replace(/[\r\n]/gm, '');
    },
    Dependencies: function () {
        return false;
    },
};
