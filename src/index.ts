// Source Code: for .Harvey Compiler!

import { loadHarvScript } from './utils/pluginManager';
import { CompiledOtherFiles } from './utils/compilerOtherFiles';
import { CreateMainLogger } from './utils/logger';
import { ChalkClass } from './utils/chalk';

// (c) - Harvey Randall 2020-2022

// Big thanks to the https://github.com/jamiebuilds/the-super-tiny-compiler for insipration and help with the tokeniser and paser and other parts.

loadHarvScript();
CreateMainLogger();

let Chalk = new ChalkClass();

interface Options {
    port?: number;
    SSR?: boolean;
    injectJS?: boolean;
    server: 
}

export default function app(options: Options) {
    let { port, SSR, injectJS } = options;

    if (port === undefined || port < 0 || port > 65535) {
        Chalk.red('Port not specified or outside of range 0-65535!');
        port = 3000;
    }
    if (SSR === undefined) {
        SSR = true;
    }
    if (injectJS === undefined) {
        injectJS = true;
    }
}

console.log(
    CompiledOtherFiles(`<function GlobalCSS Mainparent <body
<render <var Mainparent>
    <style <string "
        .nav-button{
            background-color: #4CAF50; /* Green */
            border: none;
            color:white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            font-size: 16px;
            cursor: pointer;
            outline: none;
        }
        .nav-button:hover {
            background-color: #3e8e41;
            }
        body{
            border:0;
        }
        .hidden_tag{
            display: none;
        }
        /* Yikes this handles the small text */
        .downabit{
            transform: translate(0,100%);
        }

    "> <empty>>
>
>>`),
);
