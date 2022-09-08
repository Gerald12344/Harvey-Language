const { v4: uuidv4 } = require('uuid');
module.exports = {
    Command: function (input) {
        let styleString = input[0];
        let ModuleLocked = input[1];

        if (ModuleLocked === 'true' || ModuleLocked === true) {
            styleString.replace('.');
        }

        input.splice(0, 2);
        let Children = input.join(';');
        let secondPart = '';
        if (Children !== '') {
            secondPart = `((parent) => {${Children}})(InternalUUID)`;
        }

        return `(() => {let InternalUUID = "${uuidv4()}"; let _STYLE_COMPONENT_STRING_HANDLER=${
            ModuleLocked === 'true' || ModuleLocked === true
                ? styleString + '.replaceAll(".", `.${_INTERNAL_UUID_USED_FOR_STYLES}_`)'
                : `${styleString}`
        }; let ElementWeWant = ReactfulElement('style',_STYLE_COMPONENT_STRING_HANDLER,parent, InternalUUID, ""); components.push(ElementWeWant); ${secondPart}})();`;
    },
    Dependencies: function () {
        return false;
    },
};
