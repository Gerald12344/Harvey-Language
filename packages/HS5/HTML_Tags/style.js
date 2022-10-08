const { v4: uuidv4 } = require('uuid');
module.exports = {
    Command: function ({ input }) {
        let styleString = input[0] ?? '';
        let ModuleLocked = input[1];

        styleString = styleString.replace('text: ', '');

        input.splice(0, 2);
        let Children = input.join(';');
        let secondPart = '';
        if (Children !== '') {
            secondPart = `((parent) => {${Children}})(InternalUUID)`;
        }

        let mainMatches = styleString.match(new RegExp('(?<=\\.)([a-zA-Z\\-]*)(?=\\{|\\s)', 'g'));

        if (mainMatches !== null && mainMatches.length > 0) {
            mainMatches = mainMatches.map((e) => `"${e}"`);
        }
        return `(() => {
            let InternalUUID = (typeof itteration_ID === "undefined" ? "" : itteration_ID) + "${uuidv4()}";

            let _STYLE_COMPONENT_STRING_HANDLER = ${styleString};
            ${
                ModuleLocked === 'true' || ModuleLocked === true
                    ? `
                    Array.from(new Set([${mainMatches}])).forEach(e => {
                        _STYLE_COMPONENT_STRING_HANDLER = _STYLE_COMPONENT_STRING_HANDLER.replace(new RegExp("." + e,"g"), \`.\${_INTERNAL_UUID_USED_FOR_STYLES}_\${e.replace(".",'').replace("{",'')} \n\`);
                    });
            `
                    : ''
            }
            
            let ElementWeWant = ReactfulElement('style', _STYLE_COMPONENT_STRING_HANDLER, parent, InternalUUID, "");
            components.push(ElementWeWant);
            ${secondPart}
        })();`.replace(/\n|\r/g, '');
    },
    Dependencies: function () {
        return false;
    },
};
//''.replaceAll(/\.-?[_a-zA-Z]+[_a-zA-Z0-9-]*\s*\{)/g, `.${_INTERNAL_UUID_USED_FOR_STYLES}_`);
