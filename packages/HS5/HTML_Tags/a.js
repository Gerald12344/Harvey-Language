const { v4: uuidv4 } = require('uuid');
module.exports = {
    Command: function ({ input, InjectJS }) {
        let uuid = uuidv4();
        let Parent = input[0];
        let className = input[1];
        let href = input[2];
        input.splice(0, 3);
        let Children = input.join(';');
        let secondPart = '';
        if (Children !== '') {
            secondPart = `((parent) => {${Children}})(InternalUUID)`;
        }

        return `(() => {
            let InternalUUID = (typeof itteration_ID === "undefined" ? "" : itteration_ID) + "${uuidv4()}";
            let NewElement = ReactfulElement('a', ${Parent}, parent, InternalUUID, ${className}, {
                SSR: {
                    HREF: ${href}
                }
            });
            components.push(NewElement);
            try {
                NewElement.Element.href = ${href};
                MontiorInputsPreventDefault(InternalUUID, "click", (value) => {
                    if (!(${href} === window.location.pathname)) {
                        history.move(${href});
                    }
                });;
            } catch {}
            ${secondPart}
        })();`.replace(/\n|\r/g, '');
    },
    Dependencies: function () {
        return false;
    },
};
