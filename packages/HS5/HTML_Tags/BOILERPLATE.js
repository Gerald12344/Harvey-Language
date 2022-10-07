const { v4: uuidv4 } = require('uuid');

module.exports = function ({ input, inject, typeIn, splice = 2, SSR = {} }) {
    let Parent = input[0];
    let className = input[1];
    input.splice(0, splice);
    let Children = input.join(';');
    let secondPart = '';
    if (Children !== '') {
        secondPart = `((parent) => {${Children}})(InternalUUID)`;
    }

    // Clean SSR
    Object.entries(SSR).forEach(([entry, value]) => {
        if (typeof value === 'string') {
            SSR[entry] = value.slice(1, -1);
        }
    });

    return `
    (async () => {
        let InternalUUID = (typeof itteration_ID === "undefined" ? "" :  itteration_ID) + "${uuidv4()}"; 
        let ElementWeWant = ReactfulElement('${typeIn}',${Parent},parent, InternalUUID, ${
        className === undefined || className === '' ? 'undefined' : className
    }, {SSR: ${JSON.stringify(SSR)}});
        
        ${
            inject !== ''
                ? `
            try{
                ${inject}
            }catch(e){console.log(e)};
                `
                : ''
        }
        
        components.push(ElementWeWant); 
        ${secondPart}
    })();`.replace(/[\r\n]/gm, '');
};
