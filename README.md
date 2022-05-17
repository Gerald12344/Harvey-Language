# [.Harvey](https://github.com/Gerald12344/Harvey-Language)

Harvey is a simple transpilled language that I created to help me learn about compliation and web frameworks. The language comes bundled with a inbuilt simple framework which is modelled after react, but is much simpler. It does not need to use the webframe work and can be used just to produce JS to run on a server.

---

## Create Project

```
    npm init -y
    npm i harvey-language
    npx harvey-language create-app
```

## Run Development Server

This runs a simple express server which will auto refresh on update, and watches files for updates

```
    npx harvey-language watch
```

## Build For Production

Production does not come with a server, you can make your own using express, or just upload the src folder to a static host.

```
    npx harvey-language compile
```

### Express server to serve site

```js
// Example Production Server
const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.static('dist'));

app.get('*', (req, res) => {
    res.sendFile('dist/index.html');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
```

---

# Keyworks and Functions List

```
Maths:
    add - Adds all the numbers
    subtract - Subtract all the numbers
    multiply - Multiplies all numbers
    divide - Divides all numbers

Variables:
    lestmake - Create a locally scoped variable
    var - Tell the compiler to treat value as a variable not a string
    object - Tell the compiler it is using an object not a string
    string - Tells the compiler to treat value as a string
    array - Tells the compiler values are in array form
    assign - set variable to a value
    toString - conversts to string
    delete - deletes a variable

Boolean Logic:
    if - If statement
    else - Else can only chain to an if statement
    typeof - Check the type of an variable
    true - returns true
    false - returns false
    null - returns null

Package Managing:
    iNeed - Requires from NPM/Yarn
    iWant - Loads another .Harvey Module
    harvscript - Loads the webframework
    package - loads a package from the package folder (internal use only)
    pluginFetch - loads a plugin from plugins folder (internal use only)

Functions:
    call - Call a function
    function - Create a function
    Arrowfunc - Arrowhead function
    selfCallingFunction - Function which calls itself (mostly for harvscript framework)
    sendOut - Outputs to the console
    new - Create a new instance of a class
    innerLoop - defines the body of a loop
    body - defines the body of a function
    return - returns a value
    loop - creates a loop
    throwError - throws a JS error

Array Functions
    itterate - loops through an array
    concat - turns array into string

Promises:
    promise - Creates a promise
    async - Makes the function asyncronous
    wait - waits for the promise
    after - Equivalient to .then()
    error - Equivalient to .catch()

Harv-Script 5:
    Most of these explain themselves and are internal use mostly:
        openFile
        writeFile
        While
        comment
        join
        interval
        listen
        TimeOut
        Num
        uuid
        StringConcat
        stateFulVar
        listenToState
        MultiState
        empty
        scss
        forArray
        Template
        flatten
        type
        split
        args


Web Framework:
    get - Gets a element by Id (don't use in the framework just for the utils underneath)
    render - Creates a render scope for components, that hooks onto a parents id
    Html Components:
        hOne
        hTwo
        hThree
        p
        div
        style
        button
        a
        ul
        ol
        li
        footer
        image
    Hooks:
        useHook - Creates a getter and setter
        useUpdate - listens to updates on useHook
        usePortal - Render component else where, with boolean
        hookFunction - Where all hooks must be in to clean up after unrendering

```
