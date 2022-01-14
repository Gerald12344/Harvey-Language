// Source Code: for .Harvey Compiler!

import { loadHarvScript } from './utils/pluginManager';
import { CompiledOtherFiles } from './utils/compilerOtherFiles';
import { CreateMainLogger } from './utils/logger';

// (c) - Harvey Randall 2020-2022

// Big thanks to the https://github.com/jamiebuilds/the-super-tiny-compiler for insipration and help with the tokeniser and paser and other parts.

loadHarvScript();
CreateMainLogger();

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
