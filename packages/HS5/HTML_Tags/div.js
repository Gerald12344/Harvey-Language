const { v4: uuidv4 } = require('uuid');
module.exports = {
    Command: function ({ input }) {
        let Parent = input[0];
        let className = input[1];
        input.splice(0, 2);
        let Children = input.join(';');
        let secondPart = '';
        if (Children !== '') {
            secondPart = `((parent) => {${Children}})(InternalUUID)`;
        }
        return `(() => {let InternalUUID = (typeof itteration_ID === "undefined" ? "" :  itteration_ID) + "${uuidv4()}"; let ElementWeWant = ReactfulElement('div',${Parent},parent, InternalUUID, ${className}); components.push(ElementWeWant); ${secondPart}})();`;
    },
    Dependencies: function () {
        return false;
    },
};
