const { v4: uuidv4 } = require('uuid');
module.exports = {
    Command: function (input) {
        let uuid = uuidv4();
        let Parent = input[0];
        let className = input[1];
        let src = input[2];
        input.splice(0, 3);
        let Children = input.join(';');
        let secondPart = '';
        if (Children !== '') {
            secondPart = `((parent) => {${Children}})(InternalUUID)`;
        }
        return `(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('img',${Parent},parent, InternalUUID, ${
            '_INTERNAL_UUID_USED_FOR_STYLES_' + className
        });  ElementWeWant.Element.src=${src}; components.push(ElementWeWant); ${secondPart}})();`;
    },
    Dependencies: function () {
        return false;
    },
};
