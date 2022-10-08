const { v4: uuidv4 } = require('uuid');

function findStart(loop, check) {
    for (let i = 0; i < loop.length; i++) {
        if (loop[i].startsWith(check)) {
            try {
                return `${loop[i].replace(check, '')}`;
            } catch (e) {
                return '';
            }
        }
    }
}

function findExtra(loop) {
    for (let i = 0; i < loop.length; i++) {
        if (!loop[i].startsWith('??')) {
            try {
                return `${loop[i]}`;
            } catch (e) {
                return '';
            }
        }
    }
}

module.exports = function ({ input, inject, typeIn, splice = 2, SSR = {} }) {
    let Parent = findStart(input, '??text: ') ?? '""';
    let className = findStart(input, '??class: ') ?? '""';

    let Children = findExtra(input);
    let secondPart = '';
    if (Children !== '' && Children !== undefined) {
        secondPart = `(async (parent) => {${Children}})(InternalUUID)`;
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
        let ElementWeWant = ReactfulElement("${typeIn}",${Parent},parent, InternalUUID, ${
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
