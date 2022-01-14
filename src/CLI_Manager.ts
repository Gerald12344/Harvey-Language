#!/usr/bin/env node

import { compileFile } from './compiler/compilerEntry';
import { createApp } from './utils/createApp';
import { CreateMainLogger } from './utils/logger';
import { loadHarvScript } from './utils/pluginManager';
import { lookforSettings } from './utils/settings';
import { watchChangesWithWebServer } from './utils/watch';

let colors = {
    info: '\x1b[36m',
    error: '\x1b[31m',
    warn: '\x1b[33m',
    verbose: '\x1b[43m',
    text: '\x1b[0m',
};
lookforSettings();
CreateMainLogger();
loadHarvScript();

switch (process.argv[2]) {
    case 'help':
        console.log(`
${colors.info}---------------------------[${colors.text}Harv Script${colors.info}]---------------------------${colors.text}

    --help: Show this help message
    --version: Show the version of this tool
    --compile: Compile a harvscript file
    --watch: Watch a harvscript file and compile it when it changes
    --create-app: Create a new harvscript app

${colors.error}Ⓒ Harvey Randall 2020-2022${colors.text}
            `);
        break;
    case 'compile':
        compileFile(process.argv[3]);
        break;

    case 'create-app':
        createApp();
        break;
    case 'watch':
        watchChangesWithWebServer();
        break;
    case 'version':
        console.log(`
${colors.info}---------------------------[${colors.text}Harv Script${colors.info}]---------------------------${colors.text}
v1.0.1
${colors.error}Ⓒ Harvey Randall 2020-2022${colors.text}    `);
        break;
    default:
        console.log(`
${colors.info}---------------------------[${colors.text}Harv Script${colors.info}]---------------------------${colors.text}

    --help: Show this help message
    --version: Show the version of this tool
    --compile: Compile a harvscript file
    --watch: Watch a harvscript file and compile it when it changes
    --create-app: Create a new harvscript app

${colors.error}Ⓒ Harvey Randall 2020-2022${colors.text}
            `);
        break;
}
