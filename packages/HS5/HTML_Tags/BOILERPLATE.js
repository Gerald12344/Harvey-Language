const { v4: uuidv4 } = require('uuid');

function findStart(loop, check) {
    for (let i = 0; i < loop.length; i++) {
        if (loop[i] === undefined || loop[i] === null) continue;
        if (loop[i].startsWith(check)) {
            try {
                return `${loop[i].replace(check, '')}`;
            } catch (e) {
                return '';
            }
        }
    }
}

function findStartArrayFunc(loop, check) {
    let loopEntries = [];
    for (let i = 0; i < loop.length; i++) {
        if (loop[i] === undefined || loop[i] === null) continue;
        if (loop[i].startsWith(check)) {
            try {
                loopEntries.push(loop[i].replace(check, ''));
            } catch (e) {}
        }
    }
    return loopEntries;
}

function findExtra(loop) {
    for (let i = 0; i < loop.length; i++) {
        if (loop[i] === undefined || loop[i] === null) continue;
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
    let findStartArray = findStartArrayFunc(input, '??event: ');

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

    let eventhandlerInjector = '';

    if (findStartArray.length > 0) {
        eventhandlerInjector = `
            try{
                let element = ElementWeWant.Element;
                ${findStartArray.map((e) => {
                    let [typeOfevent, eventCode] = e.split('|');
                    return `
                        element.addEventListener(${typeOfevent}, async (e) => {
                            ${eventCode}(e.target.value);
                        });
                    `;
                })}
            }catch{}
        `;
    }

    if (className?.startsWith('??')) className = '""';
    if (Parent?.startsWith('??')) Parent = '""';

    return `
    (async () => {
        let InternalUUID = (typeof itteration_ID === "undefined" ? "" :  itteration_ID) + "${uuidv4()}"; 
        let ElementWeWant = ReactfulElement("${typeIn}",${Parent},parent, InternalUUID, ${
        className === undefined || className === '' ? 'undefined' : className
    }, {SSR: ${JSON.stringify(SSR)}});
    
        ${eventhandlerInjector}

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
