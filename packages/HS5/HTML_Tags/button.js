const { v4: uuidv4 } = require('uuid');
module.exports = {
    Command: function ({ input }) {
        let Parent = input[0];
        let className = input[1];
        let clickCallback = input[2];
        input.splice(0, 3);
        //input.splice(input.length - 1, 1)
        let Children = input.join(';');
        let secondPart = '';
        if (Children !== '') {
            secondPart = `((parent) => {${Children}})(InternalUUID)`;
        }

        return `(() => {let InternalUUID = (typeof itteration_ID === "undefined" ? "" :  itteration_ID) + "${uuidv4()}"; let ElementWeWant = ReactfulElement('button',${Parent},parent, InternalUUID, ${className}); ${
            typeof clickCallback !== 'undefined'
                ? `try{ElementWeWant.Element.addEventListener("click", function(e) {${clickCallback}; }); }catch{}`
                : ''
        } components.push(ElementWeWant); ${secondPart}})();`;
    },
    Dependencies: function () {
        return false;
    },
};
