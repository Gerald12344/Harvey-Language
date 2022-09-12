import browserify from 'browserify';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { obfuscate } from 'javascript-obfuscator';
import { join } from 'path';
import { removeServerSideStuff } from '../prod/SSR_Utils';
import { createFolder } from '../utils/createApp';
import { fetchLogger } from '../utils/logger';
import { loadPlugins } from '../utils/pluginManager';
import { fetchSettings } from '../utils/settings';
import { clearcache, codeGenerator, FileDependencies, modules } from './codeGenerators';
import { parser } from './Parse';
import { tokenizer } from './Tokeniser';
import { transformer } from './Transformer';

let headers = {
    headers:
        '/* \n* \n*          HHHHHHHHH     HHHHHHHHH \n*          H:::::::H     H:::::::H \n*          H:::::::H     H:::::::H \n*          HH::::::H     H::::::HH \n*            H:::::H     H:::::H    aaaaaaaaaaaaa  rrrrr   rrrrrrrrrvvvvvvv           vvvvvvv eeeeeeeeeeee  yyyyyyy           yyyyyyy \n*            H:::::H     H:::::H    a::::::::::::a r::::rrr:::::::::rv:::::v         v:::::vee::::::::::::ee y:::::y         y:::::y \n*            H::::::HHHHH::::::H    aaaaaaaaa:::::ar:::::::::::::::::rv:::::v       v:::::ve::::::eeeee:::::eey:::::y       y:::::y \n*            H:::::::::::::::::H             a::::arr::::::rrrrr::::::rv:::::v     v:::::ve::::::e     e:::::e y:::::y     y:::::y \n*            H:::::::::::::::::H      aaaaaaa:::::a r:::::r     r:::::r v:::::v   v:::::v e:::::::eeeee::::::e  y:::::y   y:::::y \n*            H::::::HHHHH::::::H    aa::::::::::::a r:::::r     rrrrrrr  v:::::v v:::::v  e:::::::::::::::::e    y:::::y y:::::y \n*            H:::::H     H:::::H   a::::aaaa::::::a r:::::r               v:::::v:::::v   e::::::eeeeeeeeeee      y:::::y:::::y \n*            H:::::H     H:::::H  a::::a    a:::::a r:::::r                v:::::::::v    e:::::::e                y:::::::::y \n*          HH::::::H     H::::::HHa::::a    a:::::a r:::::r                 v:::::::v     e::::::::e                y:::::::y \n*   ...... H:::::::H     H:::::::Ha:::::aaaa::::::a r:::::r                  v:::::v       e::::::::eeeeeeee         y:::::y \n*   .::::. H:::::::H     H:::::::H a::::::::::aa:::ar:::::r                   v:::v         ee:::::::::::::e        y:::::y \n*   ...... HHHHHHHHH     HHHHHHHHH  aaaaaaaaaa  aaaarrrrrrr                    vvv            eeeeeeeeeeeeee       y:::::y \n*                                                                                                                 y:::::y \n*                                                                                                                y:::::y \n*                                                                                                               y:::::y \n*                                                                                                              y:::::y \n*                                                                                                             yyyyyyy \n* \n*        ',
};

function uniq(a: string[]) {
    var seen: { [key: string]: boolean } = {};
    return a.filter(function (item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}

export function browserifyModules() {
    let settings = fetchSettings();
    if (settings.browserify) {
        var b = browserify();
        modules.forEach((e) => {
            b.require(e);
        });
        if (!existsSync(`${settings.outputFolder}/packages`)) {
            mkdirSync(`${settings.outputFolder}/packages`);
        }

        let file = require('fs').createWriteStream(`${settings.outputFolder}/packages/HarvScript_Bundle_1.js`);
        file.write(
            headers.headers +
                `
* 
*      * ____________________________________________________________________ *      
*      *                     (c) Harvey Randall - 2021                        *
*      *                   https://github.com/Gerald12344                     *
*      * This final contains all the JS imports required to use the website   *
*      * For lisencing and stuff check the github page, and start the project *
*      * ____________________________________________________________________ *
*  
* “A day may come when the courage of men fails, when we forsake our friends and break all bonds of fellowship, but it is not this day.“ 
* - Harvey Randall 2021
*/\n`,
        );
        let stream = b.bundle().pipe(file);
        return new Promise<void>((resolve): void => {
            stream.on('finish', () => {
                resolve();
            });
        });
    }
}

export async function compileFile(fileDirec: string, direc = false, InjectJS = false) {
    let logger = fetchLogger();
    let input: string = '';
    if (direc === false) {
        try {
            input = readFileSync(fileDirec, 'utf8');
        } catch {
            logger?.log('error', 'File not found');
        }
    } else {
        input = fileDirec;
    }

    clearcache();
    let settings = fetchSettings();

    if (!existsSync(`${settings.outputFolder}`)) {
        mkdirSync(`${settings.outputFolder}`);
    }

    if (settings.debug) {
        logger?.log('warn', 'Loading Plugins');
    }
    loadPlugins();
    if (settings.debug) {
        logger?.log('warn', 'All Plugins loaded Successfully');
    }

    console.log('\x1b[34m', 'Compiling Code Stand by...', '\x1b[0m');
    console.log('\x1b[36m', '[                       ]', '\x1b[0m');
    if (settings.debug) {
        logger?.log('warn', 'Tokenizing please hang on...');
    }
    let tokens = tokenizer(input);
    console.log('\x1b[34m', 'Compiling Code Stand by...', '\x1b[0m');
    console.log('\x1b[36m', '[======                 ]', '\x1b[0m');
    if (settings.debug) {
        logger?.log('warn', 'Parsing please hang on...');
    }
    let ast = parser(tokens);
    console.log('\x1b[34m', 'Compiling Code Stand by...', '\x1b[0m');
    console.log('\x1b[36m', '[============           ]', '\x1b[0m');
    if (settings.debug) {
        logger?.log('warn', `Transforming please hang on...`);
    }
    let newAst = transformer(ast);
    console.log('\x1b[34m', 'Compiling Code Stand by...', '\x1b[0m');
    console.log('\x1b[36m', '[==================     ]', '\x1b[0m');
    if (settings.debug) {
        logger?.log('warn', `Generating Code please hang on...`);
    }

    let output = codeGenerator(newAst, InjectJS);
    if (settings.debug) {
        logger?.log('warn', `Cleaning up Dependencies`);
    }
    let Dependencies2 = uniq(FileDependencies);
    output = Dependencies2.join(';') + output;

    if (settings.debugFile === true) {
        try {
            createFolder(join(`./${settings.outputFolder}`, `/${settings.debugFileLocation}`));
            writeFileSync(
                join(`./${settings.outputFolder}`, `/${settings.debugFileLocation}`, `/${settings.debugFileName}`),
                output,
            );
        } catch {
            logger?.log('error', 'Yikes, Error writing to debug file.');
            process.exit(1);
        }
    }
    let MainOut = output;
    if (settings.obuscateOutput) {
        if (settings.debug) {
            logger?.log('warn', `Obfuscating and minifying output!`);
        }
        //console.log(Prepack.prepackSources([{filePath:'MainOutput', fileContents:JavaScriptObfuscator.obfuscate(output)}]))
        let { code } = removeServerSideStuff(output);
        MainOut = obfuscate(code, {}) as unknown as string;
    }

    if (settings.debug) {
        logger?.log('warn', `Writing to build file!`);
    }
    try {
        writeFileSync(
            `${settings.outputFolder}/${settings.outputFileName}`,
            headers.headers +
                '\n* Harvey Programming Compiled Stuff, you touch you break \n* For licensing and for copy right stuff please check the legal stuff below \n* This is the compiled file and is optimised and obuscated if you want to see the compiled source code look at CompiledJS.js \n* --[[Code will start soon I promise]]-- \n* Look away its hard to understand. \n*/\n' +
                MainOut,
        );
    } catch (err) {
        logger?.log('error', 'Yikes, Error writing to output file.');
        process.exit(1);
    }
    if (settings.debug) {
        logger?.log('warn', `Bundling all external modules!`);
    }
    await browserifyModules();
    console.log('\x1b[34m', 'Code Compiled.', '\x1b[0m');
    console.log('\x1b[36m', '[=======================]', '\x1b[0m');
    return output;
}
