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

('use strict');

/*This is the main script files for .Harvey, (c) - Harvey Randall 2021*/
/*Because of the small size of this project the dev files are kept at the top of the build file*/
console.log('%c[Harv-Script]' + '%c - Running Harv-Script Developmet v1.0.1!', 'color:#00B5E2', 'color:white');
let componentHashTree = {};
let hooks = [];
/*'Not all web pages were made the same, it is our job to fix that' - Harvey Randall 2020*/
/*setTimeout(() => {let bodyMain = document.getElementsByTagName('BODY')[document.getElementsByTagName('BODY'),0];let headMain = document.getElementsByTagName('HEAD')[document.getElementsByTagName('HEAD'),1];bodyMain.id = 'body';headMain.id = 'head'},500)*/
function makeAjaxRequest(url, typeIn, body, returnFunc) {
    let ajax = new XMLHttpRequest();
    if (ajax === undefined) {
        console.log('that a negetive Chief');
        return false;
    }
    function RecieveData() {}
    ajax.onreadystatechange = RecieveData;
    ajax.open(typeIn, url, true);
    ajax.setRequestHeader('Content-type', 'application/json');
    ajax.send(body);
}
function MontiorInputs(item, reason, functionToCall) {
    let textInput = componentHashTree[(componentHashTree, item)];
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
    let textInput = componentHashTree[(componentHashTree, item)];
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
        hierachy[(hierachy, id)] = mainObject;
        if (!(typeof SSR === 'undefined')) {
            mainObject.SSR = SSR;
        }
        return id;
    }
    let newElement = document.getElementById(id);
    if (!(newElement === null)) {
        newElement.removeAttribute('id');
        newElement.setAttribute('hyrdation', true);
    }
    if (newElement === null) {
        newElement = document.createElement(type);
    }
    let parentIn = componentHashTree[(componentHashTree, parent)];
    newElement.innerHTML = text;
    if (!(parentIn === undefined)) {
        parentIn.appendChild(newElement);
    }
    if (parentIn === undefined) {
        if (document.getElementById(id) === null) {
            let FoundParent = document.getElementById(parent);
            if (parent === 'body') {
                FoundParent = document.getElementsByTagName(parent)[(document.getElementsByTagName(parent), 0)];
            }
            if (parent === 'head') {
                FoundParent = document.getElementsByTagName(parent)[(document.getElementsByTagName(parent), 0)];
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
    componentHashTree[(componentHashTree, id)] = newElement;
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
            let item = OpenFuns[(OpenFuns, i)];
            if (!(item === undefined)) {
                item();
            }
        }
        let Root = document.body;
        Root.innerHTML = ''; /*lets just prevent any memory leaks*/
        componentHashTree = {};
        hooks = [];
        history.pushState('', '', body);
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
            let item = OpenFuns[(OpenFuns, i)];
            if (!(item === undefined)) {
                item();
            }
        }
        let Root = document.body;
        Root.innerHTML = '';
        history.pushState('', '', window.location.pathname);
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
    element('button', text, id, parent, className);
    MontiorInputs(id, 'click', (value) => {
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
    return output.join('');
}
function booleanComponentRendering(boolean, component, variables) {
    let cleanup = undefined;
    let rendered = false;
    function updateSettingsCycle() {
        if (boolean.aInternal === true) {
            if (rendered === true) {
                return undefined;
            }
            rendered = true;
            cleanup = component(...variables);
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
            '%c[Harv-Script]' +
                '%c - Failed, incorrect use of usePortal, the first input must be a hook, that is a boolean!',
            'color:#00B5E2',
            'color:white',
        );
        logError('Failed, incorrect use of usePortal, the first input must be a hook, that is a boolean!');
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
        returnObj[(returnObj, 'UUID')] = UUID;
        returnObj[(returnObj, 'Element')] = Element;
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
    returnObj[(returnObj, 'UUID')] = UUID;
    returnObj[(returnObj, 'Element')] = Element;
    return returnObj;
}
function reactiveTemplate(predefinedVars, defaultValueArray, valueTemplate, typeIn, parent) {
    let Var = ReactFulVariableMaker(valueTemplate);
    Var.acompanyingData = valueTemplate;
    let MetaData = {};
    for (let i = 0; i < predefinedVars.length; i = i + 1) {
        MetaData[(MetaData, predefinedVars[(predefinedVars, i)])] = defaultValueArray[(defaultValueArray, i)];
        valueTemplate = valueTemplate.replaceAll(
            '%{' + predefinedVars[(predefinedVars, i)] + '}%',
            defaultValueArray[(defaultValueArray, i)],
        );
    }
    Var.update = valueTemplate;
    Var.eventMoreData = MetaData;
    ReactfulElement(typeIn, Var, parent);
    return Var;
}
function updateTemplate(varToUpdate, newVal, reactfulElement) {
    let Template = reactfulElement.acompanyingData;
    let ExistingData = reactfulElement.eventMoreData;
    ExistingData[(ExistingData, varToUpdate)] = newVal;
    reactfulElement.eventMoreData = ExistingData;
    for (let i = 0; i < Object.entries(ExistingData).length; i = i + 1) {
        Template = Template.replaceAll(
            '%{' +
                Object.entries(ExistingData)[(Object.entries(ExistingData), i)][
                    (Object.entries(ExistingData)[(Object.entries(ExistingData), i)], 0)
                ] +
                '}%',
            Object.entries(ExistingData)[(Object.entries(ExistingData), i)][
                (Object.entries(ExistingData)[(Object.entries(ExistingData), i)], 1)
            ],
        );
    }
    reactfulElement.update = Template;
}
function generateTemplateWithElement(predefinedVars, defaultValueArray, valueTemplate) {
    let Var = ReactFulVariableMaker(valueTemplate);
    Var.acompanyingData = valueTemplate;
    let MetaData = {};
    for (let i = 0; i < predefinedVars.length; i = i + 1) {
        MetaData[(MetaData, predefinedVars[(predefinedVars, i)])] = defaultValueArray[(defaultValueArray, i)];
        valueTemplate = valueTemplate.replaceAll(
            '%{' + predefinedVars[(predefinedVars, i)] + '}%',
            defaultValueArray[(defaultValueArray, i)],
        );
    }
    Var.update = valueTemplate;
    Var.eventMoreData = MetaData;
    return Var;
}
function generateModernTemplate(template) {
    template = template.replace(/\n/g, '');
    let templateIn = template.match(/\%{(.*?)\}%/gm);
    let variables = [];
    let defaultValues = [];
    templateIn.forEach((e) => {
        e = e.split('');
        e.splice(0, 2);
        e.splice(e.length - 2, 2);
        e = e.join('');
        let dataInToFunc = e.split('|');
        variables.push(dataInToFunc[(dataInToFunc, 0)]);
        defaultValues.push(dataInToFunc[(dataInToFunc, 1)]);
    });
    let firstStage = template.replace(/\%{(.*?)\}%/gm, '%%HARVEY_VARIABLE%%');
    let almostDone = firstStage.split('%%');
    let occurence = 0;
    let justifiedOut = [];
    almostDone.forEach((e) => {
        if (e === 'HARVEY_VARIABLE') {
            justifiedOut.push('%{' + variables[(variables, occurence)] + '}%');
            occurence = occurence + 1;
            return;
        }
        justifiedOut.push(e);
    });
    let templateDone = justifiedOut.join('');
    let TemplateOut = generateTemplateWithElement(variables, defaultValues, templateDone);
    return TemplateOut;
}
function ElementMaker(typeIn, defaultValue, parent) {
    let Title = createReactiveVariable(defaultValue);
    let UUID = ReactfulElement(typeIn, Title, parent);
    Title.UUID = UUID;
    return Title;
}
/*hooks*/
/*I will now add mega cool hooks for server communication*/
function useUpdate(inputFunc, arrayToWatch) {
    let killFunc = inputFunc();
    arrayToWatch.forEach((e) => {
        /*Now verify that e actually is a reactful variable*/ if (typeof e === 'object' && !(e === null)) {
            /*Now check if has the right properties*/ if (!(e.addListener === undefined)) {
                e.addListener(() => {
                    inputFunc();
                });
                return;
            }
        }
        console.log(
            '%c[Harv-Script]' + '%c - Failed, incorrect use of hooks, useUpdate must use a array of useHook variables!',
            'color:#00B5E2',
            'color:white',
        );
        logError('Failed, incorrect use of hooks, useUpdate must use a array of useHook variables!');
    });
    return killFunc;
}
function useHook(defaultVal) {
    /*lets make a reactive variable*/ let mainReactfulVar = ReactFulVariableMaker(defaultVal);
    hooks.push(mainReactfulVar);
    function update(val) {
        mainReactfulVar.update = val;
    }
    let output = [mainReactfulVar, update];
    return output;
}
function useHookArray(input) {
    let hooks = [];
    input.forEach((e) => {
        let mainReactfulVar = ReactFulVariableMaker();
        hooks.push(mainReactfulVar);
    });
    return [
        hooks,
        function update(val, itt) {
            hooks[itt].update(val);
        },
    ];
}
/*debugging*/
function Debugger(val) {
    window.onerror = (error, url, line) => {
        if (val) {
            console.log(
                '%c[Harv-Script]' + '%c - Error occurred that could not be dismissed!\n' + '%c' + error,
                'color:#00B5E2',
                'color:white',
                'color:light-grey;text-decoration:underline;font-weight:bold',
            );
            let objectTosend = {};
            objectTosend.data = error;
            objectTosend = JSON.stringify(objectTosend);
            makeAjaxRequest(window.location.origin + '/api/error', 'POST', objectTosend);
            return (() => {
                /* Basic Component Renderer */ let parent = 'body';
                let components = [];
                let _INTERNAL_UUID_USED_FOR_STYLES = getUID(6);
                /* Function To Remove Component*/ (() => {
                    let InternalUUID =
                        (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                        '5f78f357-4900-4bcb-896e-29b83fc46a19';
                    let ElementWeWant = ReactfulElement('div', '', parent, InternalUUID, 'Error-Boundrary');
                    components.push(ElementWeWant);
                    ((parent) => {
                        (() => {
                            let InternalUUID =
                                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                                'eda2a49c-8094-4505-a887-47678fbb3095';
                            let ElementWeWant = ReactfulElement('div', '', parent, InternalUUID, '');
                            components.push(ElementWeWant);
                            ((parent) => {
                                (() => {
                                    let InternalUUID =
                                        (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                                        '89236d58-10c0-4a8e-abb9-cb9b2860af33';
                                    let ElementWeWant = ReactfulElement(
                                        'h1',
                                        'An Error Occured During Run-Time That Could Not Be Dismissed!',
                                        parent,
                                        InternalUUID,
                                        '',
                                    );
                                    components.push(ElementWeWant);
                                })();
                                (() => {
                                    let InternalUUID =
                                        (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                                        '9f927053-5907-4949-8478-bf4a20d5aba4';
                                    let ElementWeWant = ReactfulElement('h2', error, parent, InternalUUID, 'gapBelow');
                                    components.push(ElementWeWant);
                                })();
                            })(InternalUUID);
                        })();
                        (() => {
                            let InternalUUID =
                                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                                'f6ddd562-f4da-4927-91be-e899f03d07fe';
                            let _STYLE_COMPONENT_STRING_HANDLER =
                                '@import url(`https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200&display=swap`);.gapBelow {  margin-bottom: 60px;}.Error-Boundrary {  text-align: center;  height: 100vh;  width: 100vw;  position: fixed;  z-index: 1000000000;  color: black;  text-align: center;  text-transform: none;  top: 0;  justify-content: center;  align-items: center;  background-color: rgba(0, 0, 0, 0.8);  white-space: pre;  display: flex;}.Error-Boundrary > h2 {  font-family: Source Code Pro, monospace;  font-weight: 200;}.Error-Boundrary > div {  text-align: center;  height: 80vh;  background-color: white;  width: 80vw;  border-radius: 16px;  display: flex;  flex-direction: column;  justify-content: center;}';
                            let ElementWeWant = ReactfulElement(
                                'style',
                                _STYLE_COMPONENT_STRING_HANDLER,
                                parent,
                                InternalUUID,
                                '',
                            );
                            components.push(ElementWeWant);
                        })();
                    })(InternalUUID);
                })();
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
    makeAjaxRequest(window.location.origin + '/api/error', 'POST', objectTosend);
    let stack = undefined;
    try {
        throw new Error('');
    } catch (error) {
        stack = error.stack;
    }
    let split = stack.split('\n');
    split.splice(1, 1);
    stack = split.join('\n');
    if (error === true) {
        return undefined;
    }
    error = true;
    return (() => {
        /* Basic Component Renderer */ let parent = 'body';
        let components = [];
        let _INTERNAL_UUID_USED_FOR_STYLES = getUID(6);
        /* Function To Remove Component*/ (() => {
            let InternalUUID =
                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) + 'bf5448ef-c3da-44d9-8294-aefaff4d3a55';
            let ElementWeWant = ReactfulElement('div', '', parent, InternalUUID, 'Error-Boundrary');
            components.push(ElementWeWant);
            ((parent) => {
                (() => {
                    let InternalUUID =
                        (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                        'd494731e-b8bc-4327-a93d-43085999214c';
                    let ElementWeWant = ReactfulElement('div', '', parent, InternalUUID, '');
                    components.push(ElementWeWant);
                    ((parent) => {
                        (() => {
                            let InternalUUID =
                                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                                '314267db-4841-49c0-9377-96ee5af05a54';
                            let ElementWeWant = ReactfulElement(
                                'h1',
                                'An Error Occured During Run-Time That Could Not Be Dismissed!',
                                parent,
                                InternalUUID,
                                '',
                            );
                            components.push(ElementWeWant);
                        })();
                        (() => {
                            let InternalUUID =
                                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                                '730c5831-f631-4bac-a51b-0321d399caeb';
                            let ElementWeWant = ReactfulElement('h2', errorIn, parent, InternalUUID, 'gapBelow');
                            components.push(ElementWeWant);
                        })();
                        (() => {
                            let InternalUUID =
                                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                                '28758ad9-c361-427b-8eeb-27886530be8e';
                            let ElementWeWant = ReactfulElement('h1', 'Stack Trace:', parent, InternalUUID, '');
                            components.push(ElementWeWant);
                        })();
                        (() => {
                            let InternalUUID =
                                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                                'f7e1fc74-2e3c-4077-9b9e-c93087565660';
                            let ElementWeWant = ReactfulElement('h3', stack, parent, InternalUUID, undefined);
                            components.push(ElementWeWant);
                        })();
                    })(InternalUUID);
                })();
                (() => {
                    let InternalUUID =
                        (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                        '7a980dc1-f158-4b30-b0dc-5c2c61d8de1e';
                    let _STYLE_COMPONENT_STRING_HANDLER =
                        '@import url(`https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200&display=swap`);.gapBelow {  margin-bottom: 60px;}.Error-Boundrary {  text-align: center;  height: 100vh;  width: 100vw;  position: fixed;  z-index: 1000000000;  color: black;  text-align: center;  text-transform: none;  top: 0;  justify-content: center;  align-items: center;  background-color: rgba(0, 0, 0, 0.8);  white-space: pre;  display: flex;}.Error-Boundrary > h2 {  font-family: Source Code Pro, monospace;  font-weight: 200;}.Error-Boundrary > div {  text-align: center;  height: 80vh;  background-color: white;  width: 80vw;  border-radius: 16px;  display: flex;  flex-direction: column;  justify-content: center;}';
                    let ElementWeWant = ReactfulElement(
                        'style',
                        _STYLE_COMPONENT_STRING_HANDLER,
                        parent,
                        InternalUUID,
                        '',
                    );
                    components.push(ElementWeWant);
                })();
            })(InternalUUID);
        })();
        return () => {
            if (typeof useUpdateArray !== 'undefined') {
                removeComponents(components, useUpdateArray);
            } else {
                removeComponents(components);
            }
        };
    })();
}
/*Harvey Framework scripts end here*/
Debugger(true);
let axios = require('axios');

function GlobalCSS(Mainparent, itteration_ID = '') {
    let useUpdateArray = [];
    return (() => {
        /* Basic Component Renderer */ let parent = Mainparent;
        let components = [];
        let _INTERNAL_UUID_USED_FOR_STYLES = getUID(6);
        /* Function To Remove Component*/ (() => {
            let InternalUUID =
                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) + 'be4a6440-9819-4a59-9cdd-08f056b329d4';
            let _STYLE_COMPONENT_STRING_HANDLER =
                ' .nav-button{ background-color: #4CAF50; /* Green */ border: none; color:white; padding: 15px 32px; text-align: center; text-decoration: none; font-size: 16px; cursor: pointer; outline: none; } .nav-button:hover { background-color: #3e8e41; } body{ border:0; } .hidden_tag{ display: none; } /* Yikes this handles the small text */ .downabit{ transform: translate(0,100%); } .Link { color: #4CAF50; } ';
            let ElementWeWant = ReactfulElement('style', _STYLE_COMPONENT_STRING_HANDLER, parent, InternalUUID, '');
            components.push(ElementWeWant);
        })();
        return () => {
            if (typeof useUpdateArray !== 'undefined') {
                removeComponents(components, useUpdateArray);
            } else {
                removeComponents(components);
            }
        };
    })();
}
function board(parentIn, props, player, callback, itteration_ID = '') {
    let useUpdateArray = [];
    return (() => {
        /* Basic Component Renderer */ let parent = parentIn;
        let components = [];
        let _INTERNAL_UUID_USED_FOR_STYLES = getUID(6);
        /* Function To Remove Component*/ (() => {
            let InternalUUID =
                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) + '92b4f205-b074-46de-98ba-ac32a7015aa3';
            let ElementWeWant = ReactfulElement('div', '', parent, InternalUUID, 'board');
            components.push(ElementWeWant);
            ((parent) => {
                (() => {
                    let InternalUUID =
                        (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                        '423664dd-781d-4075-a081-96fe4480e8f8';
                    let ElementWeWant = ReactfulElement('div', '', parent, InternalUUID, '');
                    components.push(ElementWeWant);
                    ((parent) => {
                        let item = props[(props, 0)];
                        (() => {
                            let InternalUUID =
                                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                                'ad0c612b-d717-4457-bfd5-5e6362d61643';
                            let ElementWeWant = ReactfulElement('button', item, parent, InternalUUID, '');
                            try {
                                ElementWeWant.Element.addEventListener('click', function (e) {
                                    if (callback(0) === false) {
                                        return undefined;
                                    }
                                    item.update = player.aInternal;
                                });
                            } catch {}
                            components.push(ElementWeWant);
                        })();
                        let itemTwo = props[(props, 1)];
                        (() => {
                            let InternalUUID =
                                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                                '83cabd05-4a0f-41fd-9aeb-f1c8d13e7f58';
                            let ElementWeWant = ReactfulElement('button', itemTwo, parent, InternalUUID, '');
                            try {
                                ElementWeWant.Element.addEventListener('click', function (e) {
                                    if (callback(1) === false) {
                                        return undefined;
                                    }
                                    itemTwo.update = player.aInternal;
                                });
                            } catch {}
                            components.push(ElementWeWant);
                        })();
                        let itemThree = props[(props, 2)];
                        (() => {
                            let InternalUUID =
                                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                                'c01d6528-f208-4e2b-bd9f-0c2c823a9e1d';
                            let ElementWeWant = ReactfulElement('button', itemThree, parent, InternalUUID, '');
                            try {
                                ElementWeWant.Element.addEventListener('click', function (e) {
                                    if (callback(2) === false) {
                                        return undefined;
                                    }
                                    itemThree.update = player.aInternal;
                                });
                            } catch {}
                            components.push(ElementWeWant);
                        })();
                    })(InternalUUID);
                })();
                (() => {
                    let InternalUUID =
                        (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                        '04a0acee-6a7a-4bbc-b5b0-024e9fe0b17f';
                    let ElementWeWant = ReactfulElement('div', '', parent, InternalUUID, '');
                    components.push(ElementWeWant);
                    ((parent) => {
                        let item = props[(props, 3)];
                        (() => {
                            let InternalUUID =
                                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                                'c63832ec-2c48-4cb5-b643-a7fc118d48af';
                            let ElementWeWant = ReactfulElement('button', item, parent, InternalUUID, '');
                            try {
                                ElementWeWant.Element.addEventListener('click', function (e) {
                                    if (callback(3) === false) {
                                        return undefined;
                                    }
                                    item.update = player.aInternal;
                                });
                            } catch {}
                            components.push(ElementWeWant);
                        })();
                        let itemTwo = props[(props, 4)];
                        (() => {
                            let InternalUUID =
                                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                                'e6ba0a70-6faf-4493-8ae3-444d2c6ede1f';
                            let ElementWeWant = ReactfulElement('button', itemTwo, parent, InternalUUID, '');
                            try {
                                ElementWeWant.Element.addEventListener('click', function (e) {
                                    if (callback(4) === false) {
                                        return undefined;
                                    }
                                    itemTwo.update = player.aInternal;
                                });
                            } catch {}
                            components.push(ElementWeWant);
                        })();
                        let itemThree = props[(props, 5)];
                        (() => {
                            let InternalUUID =
                                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                                'bf806816-1828-422b-b5e1-026f5ab59c82';
                            let ElementWeWant = ReactfulElement('button', itemThree, parent, InternalUUID, '');
                            try {
                                ElementWeWant.Element.addEventListener('click', function (e) {
                                    if (callback(5) === false) {
                                        return undefined;
                                    }
                                    itemThree.update = player.aInternal;
                                });
                            } catch {}
                            components.push(ElementWeWant);
                        })();
                    })(InternalUUID);
                })();
                (() => {
                    let InternalUUID =
                        (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                        '74957b64-3b14-44f0-a01a-57509526c0d4';
                    let ElementWeWant = ReactfulElement('div', '', parent, InternalUUID, '');
                    components.push(ElementWeWant);
                    ((parent) => {
                        let item = props[(props, 6)];
                        (() => {
                            let InternalUUID =
                                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                                '43b12557-ee5b-4d13-91e9-20826d3794d7';
                            let ElementWeWant = ReactfulElement('button', item, parent, InternalUUID, '');
                            try {
                                ElementWeWant.Element.addEventListener('click', function (e) {
                                    if (callback(6) === false) {
                                        return undefined;
                                    }
                                    item.update = player.aInternal;
                                });
                            } catch {}
                            components.push(ElementWeWant);
                        })();
                        let itemTwo = props[(props, 7)];
                        (() => {
                            let InternalUUID =
                                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                                '1ef6b2a9-c2aa-4c19-ba99-a32dcb240680';
                            let ElementWeWant = ReactfulElement('button', itemTwo, parent, InternalUUID, '');
                            try {
                                ElementWeWant.Element.addEventListener('click', function (e) {
                                    if (callback(7) === false) {
                                        return undefined;
                                    }
                                    itemTwo.update = player.aInternal;
                                });
                            } catch {}
                            components.push(ElementWeWant);
                        })();
                        let itemThree = props[(props, 8)];
                        (() => {
                            let InternalUUID =
                                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                                'dedbc7c5-16ba-4c4e-a9e6-cd0540c7054e';
                            let ElementWeWant = ReactfulElement('button', itemThree, parent, InternalUUID, '');
                            try {
                                ElementWeWant.Element.addEventListener('click', function (e) {
                                    if (callback(8) === false) {
                                        return undefined;
                                    }
                                    itemThree.update = player.aInternal;
                                });
                            } catch {}
                            components.push(ElementWeWant);
                        })();
                    })(InternalUUID);
                })();
            })(InternalUUID);
        })();
        (() => {
            let InternalUUID =
                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) + '2eef943b-cfc5-4079-8042-3bb4ebf9aa88';
            let _STYLE_COMPONENT_STRING_HANDLER =
                '.board {  display: flex;  flex-direction: column;}.board > div {  flex-direction: horizontal;  width: 300px;  display: flex;  height: 100px;}.board > div > button {  width: 100px;  height: 100px;  border: 1px solid white;  text-align: center;  justify-content: center;  line-height: 100px;  font-size: 50px;}';
            let ElementWeWant = ReactfulElement('style', _STYLE_COMPONENT_STRING_HANDLER, parent, InternalUUID, '');
            components.push(ElementWeWant);
        })();
        return () => {
            if (typeof useUpdateArray !== 'undefined') {
                removeComponents(components, useUpdateArray);
            } else {
                removeComponents(components);
            }
        };
    })();
}
function checkWinner(boardArray) {
    /*check if colomn has winner*/ for (let k = 0; k < 3; k = k + 1) {
        {
            let numXCol = 0;
            let numOCol = 0;
            for (let i = 0; i < 9; i = i + 3) {
                {
                    let item = boardArray[(boardArray, i + k)];
                    if (item.aInternal === 'O') {
                        numOCol = numOCol + 1;
                    }
                    if (item.aInternal === 'X') {
                        numXCol = numXCol + 1;
                    }
                }
            }
            if (numXCol === 3) {
                return [true, 'X has won the game!']; /*X WINS!*/
            }
            if (numOCol === 3) {
                return [true, 'O has won the game!']; /*O WINS!*/
            }
        }
    } /*check if row has winner*/
    for (let k = 0; k < 9; k = k + 3) {
        {
            let numXRow = 0;
            let numORow = 0;
            for (let i = 0; i < 3; i = i + 1) {
                {
                    let item = boardArray[(boardArray, i + k)];
                    if (item.aInternal === 'O') {
                        numORow = numORow + 1;
                    }
                    if (item.aInternal === 'X') {
                        numXRow = numXRow + 1;
                    }
                }
            }
            if (numXRow === 3) {
                return [true, 'X has won the game!']; /*X WINS!*/
            }
            if (numORow === 3) {
                return [true, 'O has won the game!']; /*O WINS!*/
            }
        }
    } /*now check diagonals!*/
    let numXDiag = 0;
    let numODiag = 0;
    for (let i = 0; i < 9; i = i + 4) {
        {
            let item = boardArray[(boardArray, i)];
            if (item.aInternal === 'O') {
                numODiag = numODiag + 1;
            }
            if (item.aInternal === 'X') {
                numXDiag = numXDiag + 1;
            }
        }
    }
    if (numXDiag === 3) {
        return [true, 'X has won the game!']; /*X WINS!*/
    }
    if (numODiag === 3) {
        return [true, 'O has won the game!']; /*O WINS!*/
    }
    let numXDiagInv = 0;
    let numODiagInv = 0;
    for (let i = 0; i < 5; i = i + 2) {
        {
            let k = i + 2;
            let item = boardArray[(boardArray, k)];
            if (item.aInternal === 'O') {
                numODiagInv = numODiagInv + 1;
            }
            if (item.aInternal === 'X') {
                numXDiagInv = numXDiagInv + 1;
            }
        }
    }
    if (numXDiagInv === 3) {
        return [true, 'X has won the game!']; /*X WINS!*/
    }
    if (numODiagInv === 3) {
        return [true, 'O has won the game!']; /*O WINS!*/
    }
    let total = 0;
    for (let i = 0; i < 9; i = i + 1) {
        {
            let item = boardArray[(boardArray, i)];
            if (!(item.aInternal === '')) {
                total = total + 1;
            }
        }
    }
    if (total === 9) {
        return [true, 'Draw no one has won the game']; /*No one wins!*/
    }
    return [false];
}
function WarningComponent(Mainparent, itteration_ID = '') {
    let useUpdateArray = [];
    return (() => {
        /* Basic Component Renderer */ let parent = Mainparent;
        let components = [];
        let _INTERNAL_UUID_USED_FOR_STYLES = getUID(6);
        /* Function To Remove Component*/ (() => {
            let InternalUUID =
                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) + '2d3d5f56-c0a3-40be-a205-cf5ac896619b';
            let ElementWeWant = ReactfulElement(
                'h3',
                'A player has already selected this square!',
                parent,
                InternalUUID,
                'Warning',
            );
            components.push(ElementWeWant);
        })();
        (() => {
            let InternalUUID =
                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) + '9e7f45d6-ab81-46cb-8421-3eec6448fdcc';
            let _STYLE_COMPONENT_STRING_HANDLER = ' .Warning { color: #ff0000; } ';
            let ElementWeWant = ReactfulElement('style', _STYLE_COMPONENT_STRING_HANDLER, parent, InternalUUID, '');
            components.push(ElementWeWant);
        })();
        return () => {
            if (typeof useUpdateArray !== 'undefined') {
                removeComponents(components, useUpdateArray);
            } else {
                removeComponents(components);
            }
        };
    })();
}
function WinningComponent(Mainparent, Who, ArrayOfState, gameOver, playerThing, playerstuff, itteration_ID = '') {
    let useUpdateArray = [];
    return (() => {
        /* Basic Component Renderer */ let parent = Mainparent;
        let components = [];
        let _INTERNAL_UUID_USED_FOR_STYLES = getUID(6);
        /* Function To Remove Component*/ (() => {
            let InternalUUID =
                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) + 'a76ca53f-8b27-4315-aaf0-1511d1d796e7';
            let ElementWeWant = ReactfulElement('h1', 'GAME OVER!!!!', parent, InternalUUID, 'Winning');
            components.push(ElementWeWant);
        })();
        (() => {
            let InternalUUID =
                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) + '74ddd05a-03e4-4ce8-b682-7f06888d19b5';
            let ElementWeWant = ReactfulElement('h2', Who, parent, InternalUUID, undefined);
            components.push(ElementWeWant);
        })();
        (() => {
            let InternalUUID =
                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) + '7869255b-de69-4abe-92e6-f9dd6d11007c';
            let ElementWeWant = ReactfulElement('button', 'Refresh The Game!', parent, InternalUUID, '');
            try {
                ElementWeWant.Element.addEventListener('click', function (e) {
                    for (let i = 0; i < 9; i = i + 1) {
                        {
                            let item = ArrayOfState[(ArrayOfState, i)];
                            item.update = '';
                        }
                    }
                    playerThing('X');
                    playerstuff('Player 1');
                    gameOver(false);
                });
            } catch {}
            components.push(ElementWeWant);
        })();
        (() => {
            let InternalUUID =
                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) + '030f818f-7161-46d3-bdc7-0335b2bb6abe';
            let _STYLE_COMPONENT_STRING_HANDLER = ' ';
            let ElementWeWant = ReactfulElement('style', _STYLE_COMPONENT_STRING_HANDLER, parent, InternalUUID, '');
            components.push(ElementWeWant);
        })();
        return () => {
            if (typeof useUpdateArray !== 'undefined') {
                removeComponents(components, useUpdateArray);
            } else {
                removeComponents(components);
            }
        };
    })();
}
function tixTaxToe() {
    let useUpdateArray = [];
    let [One, useOne] = useHook('');
    let [Two, useTwo] = useHook('');
    let [Three, useThree] = useHook('');
    let [Four, useFour] = useHook('');
    let [Five, useFive] = useHook('');
    let [Six, useSix] = useHook('');
    let [Seven, useSeven] = useHook('');
    let [Eight, useEight] = useHook('');
    let [Nine, useNine] = useHook(''); /*which player??*/
    let [player, usePlayer] = useHook('X');
    let [playertitle, usePlayertitle] = useHook('Player 1');
    let [warning, useWarning] = useHook(false); /*end of game*/
    let [gameOver, useGameOver] = useHook(false);
    let [gameOverText, useGameOverText] = useHook(false);
    let arrayTosend = [One, Two, Three, Four, Five, Six, Seven, Eight, Nine];
    function validateMove(num) {
        if (gameOver.aInternal === true) {
            return false;
        }
        let itemGetting = arrayTosend[(arrayTosend, num)];
        if (!(itemGetting.aInternal === '')) {
            useWarning(true);
            setTimeout(() => {
                useWarning(false);
            }, 2000);
            return false;
        }
    } /*check for winner!*/
    /* USE UPDATE HOOK */ if (typeof useUpdateArray === 'undefined') {
        console.log(
            '%c[Harv-Script]' +
                '%c - Failed, incorrect use of hooks, useUpdate can only be used inside a hookFunction!',
            'color:#00B5E2',
            'color:white',
        );
        logError('Failed, incorrect use of hooks, useUpdate can only be used inside a hookFunction!');
    } else {
        useUpdateArray.push(
            useUpdate(() => {
                let gamestate = checkWinner(arrayTosend);
                if (gamestate[(gamestate, 0)] === true) {
                    useGameOver(true);
                    useGameOverText(gamestate[(gamestate, 1)]);
                }
            }, arrayTosend),
        );
    } /* USE UPDATE HOOK END */
    return (() => {
        /* Basic Component Renderer */ let parent = 'body';
        let components = [];
        let _INTERNAL_UUID_USED_FOR_STYLES = getUID(6);
        /* Function To Remove Component*/ (() => {
            let InternalUUID =
                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) + '6ec9d17b-5e20-48f8-804f-09d4bc839dad';
            let NewElement = ReactfulElement('a', 'Home', parent, InternalUUID, 'Link', { SSR: { HREF: '/' } });
            components.push(NewElement);
            try {
                NewElement.Element.href = '/';
                MontiorInputsPreventDefault(InternalUUID, 'click', (value) => {
                    if (!('/' === window.location.pathname)) {
                        history.move('/');
                    }
                });
            } catch {}
        })();
        (() => {
            let InternalUUID =
                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) + 'cb5169e5-78b8-4bd6-ba60-410939513d5a';
            let ElementWeWant = ReactfulElement('h1', 'Welcome To Tix Tax Toe!', parent, InternalUUID, undefined);
            components.push(ElementWeWant);
        })();
        (() => {
            let InternalUUID =
                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) + 'c427733b-e601-4d8a-a954-e23348e4888b';
            let ElementWeWant = ReactfulElement(
                'h2',
                ['Current Player: ', playertitle],
                parent,
                InternalUUID,
                undefined,
            );
            components.push(ElementWeWant);
        })();
        (() => {
            let InternalUUID =
                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) + '179a4acb-651e-49d9-bc7b-406f1d896bb9';
            let ElementWeWant = ReactfulElement('div', '', parent, InternalUUID);
            components.push(ElementWeWant);
            ((parent) => {
                booleanComponentRendering(warning, WarningComponent, [parent]);
            })(InternalUUID);
        })();
        (() => {
            let InternalUUID =
                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) + '98685faa-3b62-40dd-97e8-782fece7d4ce';
            let ElementWeWant = ReactfulElement('div', '', parent, InternalUUID);
            components.push(ElementWeWant);
            ((parent) => {
                booleanComponentRendering(gameOver, WinningComponent, [
                    parent,
                    gameOverText,
                    arrayTosend,
                    useGameOver,
                    usePlayer,
                    usePlayertitle,
                ]);
            })(InternalUUID);
        })();
        board(parent, arrayTosend, player, function FlickPlayer(num) {
            if (validateMove(num) === false) {
                return false;
            }
            if (player.aInternal === 'O') {
                usePlayer('X');
                usePlayertitle('Player 2');
                return true;
            }
            if (player.aInternal === 'X') {
                usePlayer('O');
                usePlayertitle('Player 1');
                return true;
            }
        });
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
function homepage() {
    let useUpdateArray = [];
    let [dataFromApi, setDataFromApi] = useHook('loading');
    /* USE UPDATE HOOK */ if (typeof useUpdateArray === 'undefined') {
        console.log(
            '%c[Harv-Script]' +
                '%c - Failed, incorrect use of hooks, useUpdate can only be used inside a hookFunction!',
            'color:#00B5E2',
            'color:white',
        );
        logError('Failed, incorrect use of hooks, useUpdate can only be used inside a hookFunction!');
    } else {
        useUpdateArray.push(
            useUpdate(async () => {
                setDataFromApi(
                    /* DATA FETCH */ await (
                        await (async () => {
                            if (typeof Hydration === 'undefined') {
                                return fetch('/api/' + 'newApi');
                            } else {
                                return new Promise((resolve, reject) => {
                                    resolve({ text: () => 'loading' });
                                });
                            }
                        })()
                    ).text() /* END OF DATA FETCH */,
                );
            }, []),
        );
    } /* USE UPDATE HOOK END */
    let [arrayOfEvents, updateArray] = undefined;
    console.log(arrayOfEvents);
    return (() => {
        /* Basic Component Renderer */ let parent = 'body';
        let components = [];
        let _INTERNAL_UUID_USED_FOR_STYLES = getUID(6);
        /* Function To Remove Component*/ (() => {
            let InternalUUID =
                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) + 'dd65524f-c1dc-4a49-8e02-f214f3668f51';
            let ElementWeWant = ReactfulElement(
                'h1',
                'Welcome to .harvey playground!',
                parent,
                InternalUUID,
                'Welcome',
            );
            components.push(ElementWeWant);
        })();
        (() => {
            let InternalUUID =
                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) + '5be33a6f-dd81-4898-b9c6-fdf588c8b1f8';
            let ElementWeWant = ReactfulElement(
                'h2',
                'Where I will put all the projects I have been working on',
                parent,
                InternalUUID,
                undefined,
            );
            components.push(ElementWeWant);
        })();
        (() => {
            let InternalUUID =
                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) + 'b3890fb1-de90-4dc2-8ddc-5ab76e348b10';
            let ElementWeWant = ReactfulElement(
                'h3',
                'Here is a list of all pages so far!',
                parent,
                InternalUUID,
                undefined,
            );
            components.push(ElementWeWant);
        })();
        (() => {
            let InternalUUID =
                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) + '8fb4468e-3ad1-4a2e-ac9f-1540372bbe9a';
            let ElementWeWant = ReactfulElement(
                'ul',
                '',
                parent,
                InternalUUID,
                _INTERNAL_UUID_USED_FOR_STYLES + '_' + 'list',
            );
            components.push(ElementWeWant);
            ((parent) => {
                (() => {
                    let InternalUUID =
                        (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                        '3d358e64-1aaf-4e9a-9013-8d94ccf619ba';
                    let ElementWeWant = ReactfulElement('li', '', parent, InternalUUID, '');
                    components.push(ElementWeWant);
                    ((parent) => {
                        (() => {
                            let InternalUUID =
                                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                                '2154119b-d929-4ec4-9ca0-4981776b219f';
                            let NewElement = ReactfulElement('a', 'Tic Tac Toe!', parent, InternalUUID, 'Link', {
                                SSR: { HREF: 'tictactoe' },
                            });
                            components.push(NewElement);
                            try {
                                NewElement.Element.href = 'tictactoe';
                                MontiorInputsPreventDefault(InternalUUID, 'click', (value) => {
                                    if (!('tictactoe' === window.location.pathname)) {
                                        history.move('tictactoe');
                                    }
                                });
                            } catch {}
                        })();
                    })(InternalUUID);
                })();
                (() => {
                    let InternalUUID =
                        (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                        'c4b79e65-880a-4cd0-8f3d-34649a89bcec';
                    let ElementWeWant = ReactfulElement('li', '', parent, InternalUUID, '');
                    components.push(ElementWeWant);
                    ((parent) => {
                        (() => {
                            let InternalUUID =
                                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                                '34bb35ea-2686-4a0f-bb3b-c38224124141';
                            let NewElement = ReactfulElement('a', 'Clock!', parent, InternalUUID, 'Link', {
                                SSR: { HREF: 'clock' },
                            });
                            components.push(NewElement);
                            try {
                                NewElement.Element.href = 'clock';
                                MontiorInputsPreventDefault(InternalUUID, 'click', (value) => {
                                    if (!('clock' === window.location.pathname)) {
                                        history.move('clock');
                                    }
                                });
                            } catch {}
                        })();
                    })(InternalUUID);
                })();
                (() => {
                    let InternalUUID =
                        (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                        '0c9d81bf-0f76-4fe8-9899-48fe879f796b';
                    let ElementWeWant = ReactfulElement('li', '', parent, InternalUUID, '');
                    components.push(ElementWeWant);
                    ((parent) => {
                        (() => {
                            let InternalUUID =
                                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                                'a8bf20db-0551-486b-a0d6-f737113f171d';
                            let NewElement = ReactfulElement('a', 'Calculator!', parent, InternalUUID, 'Link', {
                                SSR: { HREF: 'calculator' },
                            });
                            components.push(NewElement);
                            try {
                                NewElement.Element.href = 'calculator';
                                MontiorInputsPreventDefault(InternalUUID, 'click', (value) => {
                                    if (!('calculator' === window.location.pathname)) {
                                        history.move('calculator');
                                    }
                                });
                            } catch {}
                        })();
                    })(InternalUUID);
                })();
            })(InternalUUID);
        })();
        (() => {
            let InternalUUID =
                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) + '4ef4dc86-942a-4ee8-8933-b0ff92c34d95';
            let ElementWeWant = ReactfulElement('p', dataFromApi, parent, InternalUUID, undefined);
            components.push(ElementWeWant);
        })();
        (() => {
            let InternalUUID =
                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) + '426e75dd-b7a1-4a78-a695-c1e88bba1d30';
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
        return () => {
            if (typeof useUpdateArray !== 'undefined') {
                removeComponents(components, useUpdateArray);
            } else {
                removeComponents(components);
            }
        };
    })();
}
function Clock() {
    let useUpdateArray = [];
    let [time, usetime] = useHook('Loading!');
    let starttime = new Date();
    function formatClock() {
        /*Time globals*/ let time = new Date();
        let hour = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();
        let hoursString = `${hour}`;
        let hourSplit = hoursString.split('');
        if (hourSplit.length === 1) {
            hour = '0' + hour;
        }
        let minString = `${min}`;
        let minSplit = minString.split('');
        if (minSplit.length === 1) {
            min = '0' + min;
        }
        let secString = `${sec}`;
        let secSplit = secString.split('');
        if (secSplit.length === 1) {
            sec = '0' + sec;
        }
        let outputArray = [hour, ':', min, ':', sec];
        return outputArray.join('');
    }
    /* USE UPDATE HOOK */ if (typeof useUpdateArray === 'undefined') {
        console.log(
            '%c[Harv-Script]' +
                '%c - Failed, incorrect use of hooks, useUpdate can only be used inside a hookFunction!',
            'color:#00B5E2',
            'color:white',
        );
        logError('Failed, incorrect use of hooks, useUpdate can only be used inside a hookFunction!');
    } else {
        useUpdateArray.push(
            useUpdate(() => {
                usetime(formatClock());
                let updateloop = setInterval(() => {
                    usetime(formatClock());
                }, 1000);
                return () => {
                    clearInterval(updateloop);
                };
            }, []),
        );
    } /* USE UPDATE HOOK END */
    return (() => {
        /* Basic Component Renderer */ let parent = 'body';
        let components = [];
        let _INTERNAL_UUID_USED_FOR_STYLES = getUID(6);
        /* Function To Remove Component*/ (() => {
            let InternalUUID =
                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) + 'c589328e-fecb-4975-b9b5-d50f993169ce';
            let NewElement = ReactfulElement('a', 'Home', parent, InternalUUID, 'Link', { SSR: { HREF: '/' } });
            components.push(NewElement);
            try {
                NewElement.Element.href = '/';
                MontiorInputsPreventDefault(InternalUUID, 'click', (value) => {
                    if (!('/' === window.location.pathname)) {
                        history.move('/');
                    }
                });
            } catch {}
        })();
        (() => {
            let InternalUUID =
                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) + 'c9dd95f8-bee6-4609-b041-450ba99ff177';
            let ElementWeWant = ReactfulElement('div', '', parent, InternalUUID, 'clock-div');
            components.push(ElementWeWant);
            ((parent) => {
                (() => {
                    let InternalUUID =
                        (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                        '87fecbf5-8083-4c84-923c-9d59d886e220';
                    let ElementWeWant = ReactfulElement('h1', 'The current time is:', parent, InternalUUID, 'Clock');
                    components.push(ElementWeWant);
                })();
                (() => {
                    let InternalUUID =
                        (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                        'fe007dc1-b860-438a-a495-16dfafa7d260';
                    let ElementWeWant = ReactfulElement('h1', time, parent, InternalUUID, 'clock-numbers');
                    components.push(ElementWeWant);
                })();
                (() => {
                    let InternalUUID =
                        (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                        '45491d0d-b33c-4945-9047-0c0f420988df';
                    let ElementWeWant = ReactfulElement(
                        'h1',
                        ['You current timezone is: GMT+', starttime.getTimezoneOffset()],
                        parent,
                        InternalUUID,
                        'Clock',
                    );
                    components.push(ElementWeWant);
                })();
                (() => {
                    let InternalUUID =
                        (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                        '59fbe45c-2b7c-449d-a14e-bc5012fda7e8';
                    let _STYLE_COMPONENT_STRING_HANDLER =
                        '.clock-div {  display: flex;  justify-content: center;  width: 100vw;  height: 90vh;  flex-direction: column;}.clock-div .Clock {  color: #ffffff;  text-align: center;  font-size: 40px;}.clock-div .clock-numbers {  font-size: 150px;  color: #ffffff;  font-family: monospace;  text-align: center;}body {  padding: 0;  margin: 0;}';
                    let ElementWeWant = ReactfulElement(
                        'style',
                        _STYLE_COMPONENT_STRING_HANDLER,
                        parent,
                        InternalUUID,
                        '',
                    );
                    components.push(ElementWeWant);
                })();
            })(InternalUUID);
        })();
        return () => {
            if (typeof useUpdateArray !== 'undefined') {
                removeComponents(components, useUpdateArray);
            } else {
                removeComponents(components);
            }
        };
    })();
}
function calculatorButton(mainParent, name, callback, itteration_ID = '') {
    let useUpdateArray = [];
    return (() => {
        /* Basic Component Renderer */ let parent = mainParent;
        let components = [];
        let _INTERNAL_UUID_USED_FOR_STYLES = getUID(6);
        /* Function To Remove Component*/ (() => {
            let InternalUUID =
                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) + '1d459cef-1cdd-49fb-8e8f-733dd9029602';
            let ElementWeWant = ReactfulElement('div', '', parent, InternalUUID, 'buttonCSS');
            components.push(ElementWeWant);
            ((parent) => {
                (() => {
                    let InternalUUID =
                        (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                        '212e7f5c-043c-4f35-9981-4aee1c042023';
                    let ElementWeWant = ReactfulElement('button', '', parent, InternalUUID, '');
                    try {
                        ElementWeWant.Element.addEventListener('click', function (e) {
                            callback(name);
                        });
                    } catch {}
                    components.push(ElementWeWant);
                    ((parent) => {
                        (() => {
                            let InternalUUID =
                                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                                'f9305ae5-4320-4d16-83e4-2df5e26135b8';
                            let ElementWeWant = ReactfulElement('h1', name, parent, InternalUUID, undefined);
                            components.push(ElementWeWant);
                        })();
                    })(InternalUUID);
                })();
            })(InternalUUID);
        })();
        return () => {
            if (typeof useUpdateArray !== 'undefined') {
                removeComponents(components, useUpdateArray);
            } else {
                removeComponents(components);
            }
        };
    })();
}
function Calculator() {
    let useUpdateArray = [];
    let [screenOutput, useOutput] = useHook('');
    let currentVal = 0;
    let showingAnswer = false;
    function handleClick(type) {
        if (showingAnswer === true) {
            useOutput('');
        }
        showingAnswer = false;
        useOutput(screenOutput.aInternal + type);
    }
    function handleEnter() {
        showingAnswer = true;
        let formattedString = screenOutput.aInternal;
        formattedString = formattedString.replace('x', '*');
        formattedString = formattedString.replace('÷', '/');
        useOutput('=' + eval(formattedString));
    }
    return (() => {
        /* Basic Component Renderer */ let parent = 'body';
        let components = [];
        let _INTERNAL_UUID_USED_FOR_STYLES = getUID(6);
        /* Function To Remove Component*/ (() => {
            let InternalUUID =
                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) + '86ba6d04-b33d-4604-9c11-d1613bf676d0';
            let NewElement = ReactfulElement('a', 'Home', parent, InternalUUID, 'Link', { SSR: { HREF: '/' } });
            components.push(NewElement);
            try {
                NewElement.Element.href = '/';
                MontiorInputsPreventDefault(InternalUUID, 'click', (value) => {
                    if (!('/' === window.location.pathname)) {
                        history.move('/');
                    }
                });
            } catch {}
        })();
        (() => {
            let InternalUUID =
                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) + 'c042af7e-a707-41b2-bcac-6ce3fb81a87a';
            let ElementWeWant = ReactfulElement(
                'h1',
                '.Harvey calculator, using components for buttons!',
                parent,
                InternalUUID,
                undefined,
            );
            components.push(ElementWeWant);
        })();
        (() => {
            let InternalUUID =
                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) + '5f7a72c1-ecd2-4ae1-93aa-04b1bf330fb8';
            let ElementWeWant = ReactfulElement('div', '', parent, InternalUUID, 'calcBody');
            components.push(ElementWeWant);
            ((parent) => {
                (() => {
                    let InternalUUID =
                        (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                        '7a237a24-63dc-4258-883d-c1e4f91efcf1';
                    let ElementWeWant = ReactfulElement('h1', screenOutput, parent, InternalUUID, 'output');
                    components.push(ElementWeWant);
                })();
                (() => {
                    let InternalUUID =
                        (typeof itteration_ID === 'undefined' ? '' : itteration_ID) +
                        'a918d50b-741d-47f9-9708-7e07e4281358';
                    let ElementWeWant = ReactfulElement('div', '', parent, InternalUUID, 'buttons-area');
                    components.push(ElementWeWant);
                    ((parent) => {
                        calculatorButton(InternalUUID, '1', handleClick, '82c77230-c9fb-43e9-a6fc-f8b366372fca');
                        calculatorButton(InternalUUID, '2', handleClick, 'be934c0f-facf-417b-9832-ec1af98a2530');
                        calculatorButton(InternalUUID, '3', handleClick, 'd6a0affb-d877-4b8e-86a5-963f9f4f00d6');
                        calculatorButton(InternalUUID, '+', handleClick, 'c5f3a756-f33a-46ed-b5e3-6ea2693b6773');
                        calculatorButton(InternalUUID, '4', handleClick, '30c72dfc-08db-4647-9038-eeac7d17cc4f');
                        calculatorButton(InternalUUID, '5', handleClick, 'fbc8e8e2-57e1-4a86-bb87-3b97e351e7ab');
                        calculatorButton(InternalUUID, '6', handleClick, '2cf180c0-35bc-412b-bc16-e6b36e0f296c');
                        calculatorButton(InternalUUID, '-', handleClick, 'a41346e0-159b-404c-a530-69919e64929d');
                        calculatorButton(InternalUUID, '7', handleClick, 'ff891109-df36-4fd3-ab24-b0f7b8cc5605');
                        calculatorButton(InternalUUID, '8', handleClick, '860c3590-49d3-4123-a88a-8e6909ab1b5e');
                        calculatorButton(InternalUUID, '9', handleClick, '8d21371e-ac8d-4597-bba3-c2d7235d9bff');
                        calculatorButton(InternalUUID, 'x', handleClick, '3f4deb19-1f1f-4de8-a1e4-fb7f22322137');
                        calculatorButton(InternalUUID, '÷', handleClick, '9b073eb8-5762-4833-9236-72b4fd9ba8ad');
                        calculatorButton(InternalUUID, '0', handleClick, '2495b2c6-63af-4876-a0ec-2520a3f0c230');
                        calculatorButton(InternalUUID, '.', handleClick, 'e3d9580a-0663-4630-9fbb-19f125feadc3');
                        calculatorButton(InternalUUID, '=', handleEnter, '230807fe-0c5e-4f3d-adfd-61d462630f38');
                    })(InternalUUID);
                })();
            })(InternalUUID);
        })();
        (() => {
            let InternalUUID =
                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) + '47200dc7-7a6e-4793-980c-008338d53397';
            let _STYLE_COMPONENT_STRING_HANDLER =
                '.calcBody {  background-color: #242a31;  border-radius: 15px;  width: 400px;  height: 600px;  display: flex;  justify-content: center;  align-items: center;  margin-top: 20px;  flex-direction: column;}.calcBody .output {  height: 100px;  background-color: white;  color: black;  line-height: 100px;  padding: 0px 15px 0px 15px;  border-radius: 15px;  width: 80%;  text-align: right;}.calcBody .buttons-area {  height: 380px;  width: 80%;  padding: 0px 10px 0px 10px;  border-radius: 15px;  background-color: #191d23;  display: flex;  flex-direction: row;  justify-content: center;  align-content: center;  flex-wrap: wrap;}.calcBody .buttons-area > div {  text-align: center;  width: 23%;  height: 20%;  background-color: #242a31;  border-radius: 10px;  margin: 3px;  display: flex;  justify-content: center;  flex-direction: column;}.calcBody .buttons-area > div button {  display: flex;  justify-content: center;  flex-direction: column;  font-size: 40px;  width: 100%;  height: 100%;  vertical-align: center;  background-color: transparent;  color: white;  border: none;  cursor: pointer;}.calcBody .buttons-area > div h1 {  font-size: 40px;  margin: 0;  line-height: 100%;  text-align: center;  width: 100%;}.calcBody .buttons-area > div:hover {  background-color: black;  cursor: pointer;}';
            let ElementWeWant = ReactfulElement('style', _STYLE_COMPONENT_STRING_HANDLER, parent, InternalUUID, '');
            components.push(ElementWeWant);
        })();
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
    let [dataFromApi, setDataFromApi] = useHook('loading');
    /* USE UPDATE HOOK */ if (typeof useUpdateArray === 'undefined') {
        console.log(
            '%c[Harv-Script]' +
                '%c - Failed, incorrect use of hooks, useUpdate can only be used inside a hookFunction!',
            'color:#00B5E2',
            'color:white',
        );
        logError('Failed, incorrect use of hooks, useUpdate can only be used inside a hookFunction!');
    } else {
        useUpdateArray.push(
            useUpdate(async () => {
                setDataFromApi(
                    /* DATA FETCH */ await (
                        await (async () => {
                            if (typeof Hydration === 'undefined') {
                                return fetch('/api/' + 'newApi');
                            } else {
                                return new Promise((resolve, reject) => {
                                    resolve({ text: () => 'loading' });
                                });
                            }
                        })()
                    ).text() /* END OF DATA FETCH */,
                );
            }, []),
        );
    } /* USE UPDATE HOOK END */
    return (() => {
        /* Basic Component Renderer */ let parent = 'body';
        let components = [];
        let _INTERNAL_UUID_USED_FOR_STYLES = getUID(6);
        /* Function To Remove Component*/ (() => {
            let InternalUUID =
                (typeof itteration_ID === 'undefined' ? '' : itteration_ID) + '71cca3b4-6646-49f4-8d7b-54243c161435';
            let ElementWeWant = ReactfulElement('p', dataFromApi, parent, InternalUUID, undefined);
            components.push(ElementWeWant);
        })();
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
    GlobalCSS('body');
    RouterPoint('/', true, homepage);
    RouterPoint('/tictactoe', true, tixTaxToe);
    RouterPoint('/clock', true, Clock);
    RouterPoint('/calculator', true, Calculator);
    RouterPoint('/data', true, dataTest);
} /* END OF ROUTER POINT FOR SSR */

window.addEventListener('load', () => {
    RouterRoot();
    WindowMonitor(RouterRoot);
});
