// Source Code: for .Harvey Compiler!

import { loadHarvScript } from './utils/pluginManager';
import { CompiledOtherFiles } from './utils/compilerOtherFiles';
import { CreateMainLogger } from './utils/logger';
import { ChalkClass } from './utils/chalk';
import { Express } from 'express';
import { fetchSettings, loadSettings, lookforSettings } from './utils/settings';
import { SetupUpProdApp } from './prod/webApp';
import { compileFile } from './compiler/compilerEntry';
import { injectHTML, SetupSSR } from './prod/SSR_Utils';
import { readFileSync } from 'fs';

// (c) - Harvey Randall 2020-2022

// Big thanks to the https://github.com/jamiebuilds/the-super-tiny-compiler for insipration and help with the tokeniser and paser and other parts.

loadHarvScript();
CreateMainLogger();
//lookforSettings();
loadSettings({
    debug: true,
    version: 'v1',
    evalOnCompile: false,

    outputFolder: 'dist',
    outputFileName: 'index.js',
    inputFolder: 'src',
    inputFile: 'index.harvey',
    debugFile: true,
    debugFileName: 'debug.js',
    debugFileLocation: 'dist',
    obuscateOutput: true,

    pluginsFolder: '',
    pluginsSettings: '',

    dev: true,

    browserify: true,
});

let Chalk = new ChalkClass();

interface Options {
    port?: number;
    SSR?: boolean;
    injectJS?: boolean;
    server: Express;
}

export default async function app(options: Options) {
    let { port, SSR, injectJS, server } = options;
    let settings = fetchSettings();

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

    let HTML = SetupUpProdApp({ app: server, port, shipJS: injectJS });

    let code = await compileFile(`./${settings.inputFolder}/${settings.inputFile}`, false, injectJS);

    let { serverSideFunctions } = SetupSSR(code, injectJS);
    injectHTML({ app: server, HTML, serverSideFunctions });
}
