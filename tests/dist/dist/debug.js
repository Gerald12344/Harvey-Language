let ReactFulVariableMaker = (interal, moreData, extraData) => {
    return {
        acompanyingData: moreData,
        eventMoreData: extraData,
        aInternal: interal,
        hooks: {},
        aListener: function (val) {},
        set update(val) {
            this.aInternal = val;
            Object.entries(this.hooks).forEach(([key, value]) => {
                value(val);
            });
            this.aListener(val);
        },
        get update() {
            return this.aInternal;
        },
        registerListener: function (listener) {
            this.aListener = listener;
        },
        addListener: function (listener) {
            let uuid = uuidv4();
            this.hooks[uuid] = listener;
            return uuid;
        },
        removeListener: function (listener) {
            delete this.hooks[listener];
        },
    };
};
var byteToHex = [];
for (var iii = 0; iii < 256; ++iii) {
    byteToHex[iii] = (iii + 0x100).toString(16).substr(1);
}
function bytesToUuid(buf, offset) {
    var iii = offset || 0;
    var bth = byteToHex;
    return [
        bth[buf[iii++]],
        bth[buf[iii++]],
        bth[buf[iii++]],
        bth[buf[iii++]],
        '-',
        bth[buf[iii++]],
        bth[buf[iii++]],
        '-',
        bth[buf[iii++]],
        bth[buf[iii++]],
        '-',
        bth[buf[iii++]],
        bth[buf[iii++]],
        '-',
        bth[buf[iii++]],
        bth[buf[iii++]],
        bth[buf[iii++]],
        bth[buf[iii++]],
        bth[buf[iii++]],
        bth[buf[iii++]],
    ].join('');
}
var getRandomValues =
    (typeof crypto != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
    (typeof msCrypto != 'undefined' &&
        typeof window.msCrypto.getRandomValues == 'function' &&
        msCrypto.getRandomValues.bind(msCrypto));
function uuidv4(options, buf, offset) {
    var rnds = new Array(16);
    var iii = (buf && offset) || 0;
    if (typeof options == 'string') {
        buf = options === 'binary' ? new Array(16) : null;
        options = null;
    }
    options = options || {};
    let mathRNG = () => {
        for (var iii = 0, r; iii < 16; iii++) {
            if ((iii & 0x03) === 0) r = Math.random() * 0x100000000;
            rnds[iii] = (r >>> ((iii & 0x03) << 3)) & 0xff;
        }
        return rnds;
    };
    var rnds = options.random || (options.rng || mathRNG)();
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;
    if (buf) {
        for (var ii = 0; ii < 16; ++ii) {
            buf[iii + ii] = rnds[ii];
        }
    }
    return buf || bytesToUuid(rnds);
} /* This library uses the new Harv Script Component System */

function getUID(len) {
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        out = '';

    for (var i = 0, clen = chars.length; i < len; i++) {
        out += chars.substr(0 | (Math.random() * clen), 1);
    }

    // ensure that the uid is unique for this page
    return getUID.uids[out] ? getUID(len) : (getUID.uids[out] = out);
}
getUID.uids = {};

/*"This is the main script files for .Harvey, (c) - Harvey Randall 2021"*/
/*"Because of the small size of this project the dev files are kept at the top of the build file"*/
console.log('%c[Harv-Script]' + '%c - Running Harv-Script Developmet v1.0.1!', 'color:#00B5E2', 'color:white');
let componentHashTree = {};
let hooks = [];
/*"'Not all web pages were made the same, it is our job to fix that' - Harvey Randall 2020"*/
/*setTimeout(() => {let bodyMain = document.getElementsByTagName('"BODY"')[0];let headMain = document.getElementsByTagName('"HEAD"')[1];bodyMain.id = '"body"';headMain.id = '"head"'},500)*/
function makeAjaxRequest(url, typeIn, body, returnFunc) {
    let ajax = new XMLHttpRequest();
    if (ajax === undefined) {
        console.log('"that a negetive Chief"');
        return false;
    }
    function RecieveData() {}
    ajax.onreadystatechange = RecieveData;
    ajax.open(typeIn, url, true);
    ajax.setRequestHeader('"Content-type"', '"application/json"');
    ajax.send(body);
}
function MontiorInputs(item, reason, functionToCall) {
    let textInput = componentHashTree[item];
    if (textInput === undefined) {
        return undefined;
    }
    textInput.addEventListener(
        reason,
        function input(input) {
            setTimeout(function test() {
                functionToCall(input.target.value, input.key);
            }, 5);
        },
        false,
    );
}
function MontiorInputsPreventDefault(item, reason, functionToCall) {
    let textInput = componentHashTree[item];
    if (textInput === undefined) {
        return undefined;
    }
    textInput.addEventListener(
        reason,
        function input(input) {
            input.preventDefault();
            setTimeout(function test() {
                functionToCall(input.target.value, input.key);
            }, 5);
        },
        false,
    );
}
let hierachy = [];
function element(type, text, id, parent, className, SSR) {
    if (typeof className === 'object') {
        className = '';
    }
    if (!(typeof Hydration === 'undefined') && Hydration === true) {
        let mainObject = {};
        mainObject.type = type;
        mainObject.id = id;
        mainObject.className = className;
        mainObject.text = text;
        mainObject.parent = parent;
        hierachy[id] = mainObject;
        if (!(typeof SSR === 'undefined')) {
            mainObject.SSR = SSR;
        }
        return id;
    }
    let newElement = document.getElementById(id);
    if (!(newElement === null)) {
        newElement.removeAttribute('id');
        newElement.setAttribute('"hydration"', true);
    }
    if (newElement === null) {
        newElement = document.createElement(type);
    }
    let parentIn = componentHashTree[parent];
    newElement.innerHTML = text;
    if (!(parentIn === undefined)) {
        parentIn.appendChild(newElement);
    }
    if (parentIn === undefined) {
        if (document.getElementById(id) === null) {
            let FoundParent = document.getElementById(parent);
            if (parent === body) {
                FoundParent = document.getElementsByTagName(parent)[0];
            }
            if (parent === head) {
                FoundParent = document.getElementsByTagName(parent)[0];
            }
            FoundParent.appendChild(newElement);
        }
        if (!(document.getElementById(id) === null)) {
            newElement.innerHTML = text;
        }
    }
    if (!(className === undefined) && !(className === '')) {
        newElement.className = className;
    }
    componentHashTree[id] = newElement;
    return newElement;
}
function updatelement(id, inner) {
    let FoundParent = document.getElementById(id);
    FoundParent.innerHTML = inner;
}
function updateText(id, text, wipeValue) {
    let Node = document.getElementById(id);
    Node.innerHTML = text;
    if (wipeValue) {
        Node.value = text;
    }
}
function removeComponents(ArrayIn, UseEffects) {
    ArrayIn.forEach((e) => {
        e.Element.remove();
    });
    if (!(UseEffects === undefined)) {
        UseEffects.forEach((e) => {
            if (typeof e === 'function') {
                e();
            }
        });
    }
}
let OpenFuns = [];
function WindowMonitor(ReturnFunc) {
    history.move = (body) => {
        for (let i = 0; i < OpenFuns.length; i = i + 1) {
            let item = OpenFuns[i];
            if (!(item === undefined)) {
                item();
            }
        }
        let Root = document.body;
        Root.innerHTML = ''; /*"lets just prevent any memory leaks"*/
        componentHashTree = {};
        hooks = [];
        history.pushState('""', '""', body);
        console.log(
            '%c[Harv-Script]' + '%c - Page location changed to ' + window.location.pathname + '!',
            'color:#00B5E2',
            'color:white',
        );
        ReturnFunc();
    };
    window.onpopstate = () => {
        console.log(window.location.pathname);
        for (let i = 0; i < OpenFuns.length; i = i + 1) {
            let item = OpenFuns[i];
            if (!(item === undefined)) {
                item();
            }
        }
        let Root = document.body;
        Root.innerHTML = '""';
        history.pushState('""', '""', window.location.pathname);
        ReturnFunc();
    };
}
function RouterPoint(location, exact, component) {
    if (exact) {
        if (window.location.pathname === location) {
            OpenFuns.push(component());
        }
    }
    if (exact === false) {
        if (window.location.pathname.startsWith(location)) {
            OpenFuns.push(component());
        }
    }
}
function Link(href, text, id, parent, className) {
    element('"button"', text, id, parent, className);
    MontiorInputs(id, '"click"', (value) => {
        if (!(href === window.location.pathname)) {
            history.move(href);
        }
    });
}
function createReactiveVariable(defaultState) {
    return ReactFulVariableMaker(defaultState);
}
function generateStringFromReactVar(arrayIn) {
    let output = [];
    arrayIn.forEach((e) => {
        if ('object' === typeof e) {
            output.push(e.aInternal);
            return undefined;
        }
        output.push(e);
    });
    return output.join('""');
}
function booleanComponentRendering(parent, boolean, component, variables, itt) {
    let cleanup = undefined;
    let rendered = false;
    function updateSettingsCycle() {
        if (boolean.aInternal === true) {
            if (rendered === true) {
                return undefined;
            }
            rendered = true;
            cleanup = component(parent, ...variables, '""', itt);
            return undefined;
        }
        if (boolean.aInternal === false) {
            if (rendered === false) {
                return undefined;
            }
            rendered = false;
            if (!(typeof cleanup === 'undefined')) {
                cleanup();
            }
            return undefined;
        }
        console.log(
            '"%c[Harv-Script]"' +
                '"%c - Failed, incorrect use of usePortal, the first input must be a hook, that is a boolean!"',
            '"color:#00B5E2"',
            '"color:white"',
        );
        logError('"Failed, incorrect use of usePortal, the first input must be a hook, that is a boolean!"');
    }
    boolean.addListener((value) => {
        updateSettingsCycle();
    });
    updateSettingsCycle();
}
function ReactfulElement(ElementType, reactVar, parent, UUID, ClassName, SSR) {
    if (UUID === undefined) {
        UUID = uuidv4();
    }
    let HREF = {};
    if (!(typeof Hydration === 'undefined')) {
        if (!(typeof SSR === 'undefined')) {
            HREF = SSR;
        }
    }
    let reactfulVars = [];
    let reactfulClassVars = [];
    if (Array.isArray(reactVar)) {
        reactVar.forEach((e) => {
            if ('object' === typeof e) {
                reactfulVars.push(e);
            }
        });
    }
    if (Array.isArray(ClassName)) {
        ClassName.forEach((e) => {
            if ('object' === typeof e) {
                reactfulClassVars.push(e);
            }
        });
    }
    if ('string' === typeof reactVar) {
        if (ClassName === undefined) {
            ClassName = {};
        }
        if (ClassName.aListener === undefined && !(ClassName === undefined)) {
            let defaultState = ClassName;
            ClassName = {};
            ClassName.aInternal = defaultState;
        }
        let Element = element(ElementType, reactVar, UUID, parent, ClassName.aInternal, HREF);
        let returnObj = {};
        if (Array.isArray(ClassName)) {
            let text = generateStringFromReactVar(ClassName);
            if (typeof Hydration === 'undefined') {
                Element.className = text;
            }
            reactfulClassVars.forEach((e) => {
                e.addListener((value) => {
                    let text = generateStringFromReactVar(ClassName);
                    if (typeof Hydration === 'undefined') {
                        Element.className = text;
                    }
                });
            });
        }
        if (Array.isArray(ClassName) === false) {
            if ('object' === typeof ClassName && !(ClassName.aListener === undefined)) {
                ClassName.addListener((value) => {
                    if (typeof Hydration === 'undefined') {
                        Element.className = value;
                    }
                });
            }
        }
        returnObj['UUID'] = UUID;
        returnObj['Element'] = Element;
        return returnObj;
    }
    if (ClassName === undefined) {
        ClassName = {};
    }
    let Element = undefined;
    if (Array.isArray(reactVar)) {
        let text = generateStringFromReactVar(reactVar);
        if ('string' === typeof ClassName) {
            Element = element(ElementType, text, UUID, parent, ClassName, HREF);
        }
        if ('object' === typeof ClassName) {
            Element = element(ElementType, text, UUID, parent, ClassName.aInternal, HREF);
        }
        reactfulVars.forEach((e) => {
            e.addListener((value) => {
                let text = generateStringFromReactVar(reactVar);
                if (typeof Hydration === 'undefined') {
                    Element.innerHTML = text;
                }
            });
        });
    }
    if (Array.isArray(reactVar) === false) {
        if ('string' === typeof ClassName) {
            Element = element(ElementType, reactVar.aInternal, UUID, parent, ClassName, HREF);
        }
        if ('object' === typeof ClassName) {
            Element = element(ElementType, reactVar.aInternal, UUID, parent, ClassName.aInternal, HREF);
        }
        reactVar.addListener((value) => {
            if (typeof Hydration === 'undefined') {
                Element.innerHTML = value;
            }
        });
    }
    if (Array.isArray(ClassName)) {
        let text = generateStringFromReactVar(ClassName);
        if (typeof Hydration === 'undefined') {
            Element.className = text;
        }
        reactfulClassVars.forEach((e) => {
            e.addListener((value) => {
                let text = generateStringFromReactVar(ClassName);
                if (typeof Hydration === 'undefined') {
                    Element.className = text;
                }
            });
        });
    }
    if (Array.isArray(ClassName) === false) {
        if ('object' === typeof ClassName && !(ClassName.aListener === undefined)) {
            ClassName.addListener((value) => {
                if (typeof Hydration === 'undefined') {
                    Element.className = value;
                }
            });
        }
    }
    if ('string' === typeof ClassName) {
        if (typeof Hydration === 'undefined') {
            Element.className = ClassName;
        }
    }
    let returnObj = {};
    returnObj['UUID'] = UUID;
    returnObj['Element'] = Element;
    return returnObj;
}
function reactiveTemplate(predefinedVars, defaultValueArray, valueTemplate, typeIn, parent) {
    let Var = ReactFulVariableMaker(valueTemplate);
    Var.acompanyingData = valueTemplate;
    let MetaData = {};
    for (let i = 0; i < predefinedVars.length; i = i + 1) {
        MetaData[predefinedVars[i]] = defaultValueArray[i];
        valueTemplate = valueTemplate.replaceAll('"%{"' + predefinedVars[i] + '"}%"', defaultValueArray[i]);
    }
    Var.update = valueTemplate;
    Var.eventMoreData = MetaData;
    ReactfulElement(typeIn, Var, parent);
    return Var;
}
function updateTemplate(varToUpdate, newVal, reactfulElement) {
    let Template = reactfulElement.acompanyingData;
    let ExistingData = reactfulElement.eventMoreData;
    ExistingData[varToUpdate] = newVal;
    reactfulElement.eventMoreData = ExistingData;
    for (let i = 0; i < Object.entries(ExistingData).length; i = i + 1) {
        Template = Template.replaceAll(
            '"%{"' + Object.entries(ExistingData)[i][0] + '"}%"',
            Object.entries(ExistingData)[i][1],
        );
    }
    reactfulElement.update = Template;
}
function generateTemplateWithElement(predefinedVars, defaultValueArray, valueTemplate) {
    let Var = ReactFulVariableMaker(valueTemplate);
    Var.acompanyingData = valueTemplate;
    let MetaData = {};
    for (let i = 0; i < predefinedVars.length; i = i + 1) {
        MetaData[predefinedVars[i]] = defaultValueArray[i];
        valueTemplate = valueTemplate.replaceAll('"%{"' + predefinedVars[i] + '"}%"', defaultValueArray[i]);
    }
    Var.update = valueTemplate;
    Var.eventMoreData = MetaData;
    return Var;
}
function generateModernTemplate(template) {
    template = template.replace('/\n/g', '""');
    let templateIn = template.match('/%{(.*?)}%/gm');
    let variables = [];
    let defaultValues = [];
    templateIn.forEach((e) => {
        e = e.split('""');
        e.splice(0, 2);
        e.splice(e.length - 2, 2);
        e = e.join('""');
        let dataInToFunc = e.split('"|"');
        variables.push(dataInToFunc[0]);
        defaultValues.push(dataInToFunc[1]);
    });
    let firstStage = template.replace('/%{(.*?)}%/gm', '"%%HARVEY_VARIABLE%%"');
    let almostDone = firstStage.split('"%%"');
    let occurence = 0;
    let justifiedOut = [];
    almostDone.forEach((e) => {
        if (e === 'HARVEY_VARIABLE') {
            justifiedOut.push('"%{"' + variables[occurence] + '"}%"');
            occurence = occurence + 1;
            return;
        }
        justifiedOut.push(e);
    });
    let templateDone = justifiedOut.join('""');
    let TemplateOut = generateTemplateWithElement(variables, defaultValues, templateDone);
    return TemplateOut;
}
function ElementMaker(typeIn, defaultValue, parent) {
    let Title = createReactiveVariable(defaultValue);
    let UUID = ReactfulElement(typeIn, Title, parent);
    Title.UUID = UUID;
    return Title;
}
/*"hooks"*/
/*"I will now add mega cool hooks for server communication"*/
function useUpdate(inputFunc, arrayToWatch) {
    let killFunc = inputFunc();
    arrayToWatch.forEach((e) => {
        /*"Now verify that e actually is a reactful variable"*/ if (typeof e === 'object' && !(e === null)) {
            /*"Now check if has the right properties"*/ if (!(e.addListener === undefined)) {
                e.addListener(() => {
                    inputFunc();
                });
                return;
            }
        }
        console.log(
            '"%c[Harv-Script]"' +
                '"%c - Failed, incorrect use of hooks, useUpdate must use a array of useHook variables!"',
            '"color:#00B5E2"',
            '"color:white"',
        );
        logError('"Failed, incorrect use of hooks, useUpdate must use a array of useHook variables!"');
    });
    return killFunc;
}
function useHook(defaultVal) {
    /*"lets make a reactive variable"*/ let mainReactfulVar = ReactFulVariableMaker(defaultVal);
    hooks.push(mainReactfulVar);
    function update(val) {
        mainReactfulVar.update = val;
    }
    let output = [mainReactfulVar, update];
    return output;
}
function useHookArray(input) {
    let hooksInternal = [];
    input.forEach((e) => {
        let mainReactfulVar = ReactFulVariableMaker(e);
        hooksInternal.push(mainReactfulVar);
    });

    hooks = [...hooks, ...hooksInternal];

    return [
        hooksInternal,
        function update(val, itt) {
            hooksInternal[itt].update = val;
        },
    ];
}
/*"debugging"*/
function Debugger(val) {
    window.onerror = (error, url, line) => {
        if (val) {
            console.log(
                '"%c[Harv-Script]"' + '"%c - Error occurred that could not be dismissed!\n"' + '"%c"' + error,
                '"color:#00B5E2"',
                '"color:white"',
                '"color:light-grey;text-decoration:underline;font-weight:bold"',
            );
            let objectTosend = {};
            objectTosend.data = error;
            objectTosend = JSON.stringify(objectTosend);
            makeAjaxRequest(window.location.origin + '"/api/error"', '"POST"', objectTosend);
            return (() => {
                /* Basic Component Renderer */ let parent = '"body"';
                let components = [];
                let _INTERNAL_UUID_USED_FOR_STYLES = getUID(6);
                /* Function To Remove Component*/ ((InternalUUID) => {
                    (async () => {
                        let InternalUUID =
                            (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                            '7f3ec84f-64fc-4c77-af3b-eec87f5be4a9';
                        let ElementWeWant = ReactfulElement('div', '', parent, InternalUUID, '', { SSR: {} });
                        components.push(ElementWeWant);
                        (async (parent) => {
                            '';
                        })(InternalUUID);
                    })();
                })(parent);
                return () => {
                    if (typeof useUpdateArray !== 'undefined') {
                        removeComponents(components, useUpdateArray);
                    } else {
                        removeComponents(components);
                    }
                };
            })();
        }
    };
}
let error = false;
function logError(errorIn) {
    let objectTosend = {};
    objectTosend.data = errorIn;
    objectTosend = JSON.stringify(objectTosend);
    makeAjaxRequest(window.location.origin + '"/api/error"', '"POST"', objectTosend);
    let stack = undefined;
    try {
        throw new Error('""');
    } catch (error) {
        stack = error.stack;
    }
    let split = stack.split('"\n"');
    split.splice(1, 1);
    stack = split.join('"\n"');
    if (error === true) {
        return undefined;
    }
    error = true;
    return (() => {
        /* Basic Component Renderer */ let parent = '"body"';
        let components = [];
        let _INTERNAL_UUID_USED_FOR_STYLES = getUID(6);
        /* Function To Remove Component*/ ((InternalUUID) => {
            (async () => {
                let InternalUUID =
                    (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                    'ee3de458-45f8-46e1-98f0-a518e940a8b7';
                let ElementWeWant = ReactfulElement('div', '', parent, InternalUUID, '', { SSR: {} });
                components.push(ElementWeWant);
                (async (parent) => {
                    '';
                })(InternalUUID);
            })();
        })(parent);
        return () => {
            if (typeof useUpdateArray !== 'undefined') {
                removeComponents(components, useUpdateArray);
            } else {
                removeComponents(components);
            }
        };
    })();
}
/*"Harvey Framework scripts end here"*/
Debugger(true);
let axios = require('axios');

/* API POINTER */ /* END OF API POINTER */
function homepage() {
    let useUpdateArray = [];
    let [data, setData] = useHook('hello');
    return (() => {
        /* Basic Component Renderer */ let parent = 'body';
        let components = [];
        let _INTERNAL_UUID_USED_FOR_STYLES = getUID(6);
        /* Function To Remove Component*/ ((InternalUUID) => {
            (async () => {
                let InternalUUID =
                    (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                    'b7815255-b46e-425c-b7aa-6895725d600e';
                let ElementWeWant = ReactfulElement(
                    'h1',
                    'Welcome to .harvey playground!',
                    parent,
                    InternalUUID,
                    _INTERNAL_UUID_USED_FOR_STYLES + '_' + 'Welcome',
                    { SSR: {} },
                );
                components.push(ElementWeWant);
            })();
            (async () => {
                let InternalUUID =
                    (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                    'ea45a49a-a8b4-4790-bdb7-ad767fc65df9';
                let ElementWeWant = ReactfulElement('img', '', parent, InternalUUID, '', {
                    SSR: {
                        src: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/2OQ4DCSJERKBNIFCNLOCBIC45I.jpg',
                    },
                });
                try {
                    ElementWeWant.Element.setAttribute(
                        'src',
                        'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/2OQ4DCSJERKBNIFCNLOCBIC45I.jpg',
                    );
                } catch (e) {
                    console.log(e);
                }
                components.push(ElementWeWant);
            })();
            (async () => {
                let InternalUUID =
                    (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                    'e62cbbd2-9ae8-4a8e-b985-ccf82d695fb7';
                let ElementWeWant = ReactfulElement(
                    'h2',
                    'Where I will put all the projects I have been working on',
                    parent,
                    InternalUUID,
                    '',
                    { SSR: {} },
                );
                components.push(ElementWeWant);
            })();
            (async () => {
                let InternalUUID =
                    (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                    'c1269ac3-6b66-4103-9000-9034babc61ab';
                let ElementWeWant = ReactfulElement(
                    'h3',
                    'Here is a list of all pages so far!',
                    parent,
                    InternalUUID,
                    '',
                    { SSR: {} },
                );
                components.push(ElementWeWant);
            })();
            (async () => {
                let InternalUUID =
                    (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                    'c1b30be9-f6b8-4e2d-8859-a7f993186add';
                let ElementWeWant = ReactfulElement(
                    'ul',
                    '',
                    parent,
                    InternalUUID,
                    _INTERNAL_UUID_USED_FOR_STYLES + '_' + 'list',
                    { SSR: {} },
                );
                components.push(ElementWeWant);
                (async (parent) => {
                    (async () => {
                        let InternalUUID =
                            (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                            '5d4df961-88eb-4296-b1db-4b37541f6d54';
                        let ElementWeWant = ReactfulElement('li', '', parent, InternalUUID, '', { SSR: {} });
                        components.push(ElementWeWant);
                        (async (parent) => {
                            (async () => {
                                let InternalUUID =
                                    (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                                    '3742eef2-c54f-4be1-acdb-07fce4b27508';
                                let ElementWeWant = ReactfulElement('a', 'Data!', parent, InternalUUID, 'Link', {
                                    SSR: { href: 'data' },
                                });
                                try {
                                    ElementWeWant.Element.href = 'data';
                                    MontiorInputsPreventDefault(InternalUUID, 'click', (value) => {
                                        if (!('data' === window.location.pathname)) {
                                            history.move('data');
                                        }
                                    });
                                } catch (e) {
                                    console.log(e);
                                }
                                components.push(ElementWeWant);
                            })();
                        })(InternalUUID);
                    })();
                })(InternalUUID);
            })();
            (async () => {
                let InternalUUID =
                    (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                    'f5469892-d8a2-492b-bef8-eca866559d2b';
                let ElementWeWant = ReactfulElement('p', data, parent, InternalUUID, '', { SSR: {} });
                components.push(ElementWeWant);
            })();
            (() => {
                let InternalUUID =
                    (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                    'c4adb51d-ea17-4711-9afa-aaa1dd0ceb5c';
                let _STYLE_COMPONENT_STRING_HANDLER =
                    '.Welcome {  color: #00a8ff;}.list a {  font-size: 20px;  background-color: #2f3640;  cursor: pointer;  text-decoration: underline;  border: 0px solid;  color: #00a8ff;}';
                Array.from(new Set(['Welcome', 'list'])).forEach((e) => {
                    _STYLE_COMPONENT_STRING_HANDLER = _STYLE_COMPONENT_STRING_HANDLER.replace(
                        new RegExp('.' + e, 'g'),
                        `.${_INTERNAL_UUID_USED_FOR_STYLES}_${e.replace('.', '').replace('{', '')} `,
                    );
                });
                let ElementWeWant = ReactfulElement('style', _STYLE_COMPONENT_STRING_HANDLER, parent, InternalUUID, '');
                components.push(ElementWeWant);
            })();
        })(parent);
        return () => {
            if (typeof useUpdateArray !== 'undefined') {
                removeComponents(components, useUpdateArray);
            } else {
                removeComponents(components);
            }
        };
    })();
}
/* API POINTER */ /* END OF API POINTER */
function dataTest() {
    let useUpdateArray = [];
    return (() => {
        /* Basic Component Renderer */ let parent = 'body';
        let components = [];
        let _INTERNAL_UUID_USED_FOR_STYLES = getUID(6);
        /* Function To Remove Component*/ ((InternalUUID) => {
            (async () => {
                let InternalUUID =
                    (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                    'b10cbc90-c44c-4711-884c-74d39787f188';
                let ElementWeWant = ReactfulElement('a', 'Home', parent, InternalUUID, 'Link', { SSR: { href: '/' } });
                try {
                    ElementWeWant.Element.href = '/';
                    MontiorInputsPreventDefault(InternalUUID, 'click', (value) => {
                        if (!('/' === window.location.pathname)) {
                            history.move('/');
                        }
                    });
                } catch (e) {
                    console.log(e);
                }
                components.push(ElementWeWant);
            })();
            (async () => {
                let InternalUUID =
                    (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                    '9ec11ec4-1aeb-4f4f-a94e-50abc4d88f14';
                let ElementWeWant = ReactfulElement(
                    'p',
                    /* DATA FETCH */ await (
                        await (async () => {
                            if (typeof Hydration === 'undefined') {
                                let dataInput = JSON.stringify({});
                                return fetch('/api/' + 'newApi', {
                                    method: 'post',
                                    body: dataInput,
                                    headers: { 'Content-Type': 'application/json' },
                                });
                            } else {
                                return new Promise((resolve, reject) => {
                                    resolve({ text: () => 'loading' });
                                });
                            }
                        })()
                    ).text() /* END OF DATA FETCH */,
                    parent,
                    InternalUUID,
                    '',
                    { SSR: {} },
                );
                components.push(ElementWeWant);
            })();
        })(parent);
        return () => {
            if (typeof useUpdateArray !== 'undefined') {
                removeComponents(components, useUpdateArray);
            } else {
                removeComponents(components);
            }
        };
    })();
}
function globalCSS() {
    let useUpdateArray = [];
    return (() => {
        /* Basic Component Renderer */ let parent = 'body';
        let components = [];
        let _INTERNAL_UUID_USED_FOR_STYLES = getUID(6);
        /* Function To Remove Component*/ ((InternalUUID) => {
            (() => {
                let InternalUUID =
                    (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                    '8a7b5c30-db00-4070-a4c6-81811baa7a2f';
                let _STYLE_COMPONENT_STRING_HANDLER =
                    '            .Link {                color:green;            }        ';
                let ElementWeWant = ReactfulElement('style', _STYLE_COMPONENT_STRING_HANDLER, parent, InternalUUID, '');
                components.push(ElementWeWant);
            })();
        })(parent);
        return () => {
            if (typeof useUpdateArray !== 'undefined') {
                removeComponents(components, useUpdateArray);
            } else {
                removeComponents(components);
            }
        };
    })();
}

/* ROUTER POINT FOR SSR */ function RouterRoot() {
    globalCSS();
    RouterPoint('/', true, homepage);
    RouterPoint('/data', true, dataTest);
} /* END OF ROUTER POINT FOR SSR */

window.addEventListener('load', () => {
    RouterRoot();
    WindowMonitor(RouterRoot);
});
