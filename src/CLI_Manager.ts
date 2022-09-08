#!/usr/bin/env node

import checkForUpdate from 'update-check';
import prompts from 'prompts';
import { validateNpmName } from './utils/checkNpmName';
import { basename, resolve } from 'path';
import { ChalkClass } from './utils/chalk';
import { compileFile } from './compiler/compilerEntry';
import { createApp } from './utils/createApp';
import { CreateMainLogger } from './utils/logger';
import { loadHarvScript } from './utils/pluginManager';
import { lookforSettings } from './utils/settings';
import { watchChangesWithWebServer } from './utils/watch';
import { program } from 'commander';

lookforSettings();
CreateMainLogger();
loadHarvScript();

let projectPath: string = '';
let chalk = new ChalkClass();

program
    .command('compile')
    .version('1.0.24')
    .description('Compile the app')
    .action(() => {
        compileFile(process.argv[3]);
    });

program
    .command('watch')
    .version('1.0.24')
    .description('Compile the app')
    .action(() => {
        watchChangesWithWebServer();
    });

program
    .command('create-app')
    .version('1.0.24')
    .argument('[project-directory]')
    .usage(`${chalk.green('<project-directory>')} [options]`)
    .action((name: string) => {
        projectPath = name;
        run()
            .then(notifyUpdate)
            .catch(async (reason) => {
                console.log();
                console.log('Aborting installation.');
                if (reason.command) {
                    console.log(`  ${chalk.cyan(reason.command)} has failed.`);
                } else {
                    console.log(chalk.red('Unexpected error. Please report it as a bug:'));
                    console.log(reason);
                }
                console.log();

                await notifyUpdate();

                process.exit(1);
            });
    })
    .allowUnknownOption();

async function run(): Promise<void> {
    if (typeof projectPath === 'string') {
        projectPath = projectPath.trim();
    }
    if (!projectPath) {
        const res = await prompts({
            type: 'text',
            name: 'path',
            message: 'What is your project named?',
            initial: 'my-app',
            validate: (name) => {
                const validation = validateNpmName(basename(resolve(name)));
                if (validation.valid) {
                    return true;
                }
                return 'Invalid project name: ' + validation.problems![0];
            },
        });

        if (typeof res.path === 'string') {
            projectPath = res.path.trim();
        }
    }

    if (!projectPath) {
        console.log();
        console.log('Please specify the project directory:');
        console.log(`  ${chalk.cyan(program.name())} ${chalk.green('<project-directory>')}`);
        console.log();
        console.log('For example:');
        console.log(`  ${chalk.cyan(program.name())} ${chalk.green('my-next-app')}`);
        console.log();
        console.log(`Run ${chalk.cyan(`${program.name()} --help`)} to see all options.`);
        process.exit(1);
    }

    const resolvedProjectPath = resolve(projectPath);
    const projectName = basename(resolvedProjectPath);

    const { valid, problems } = validateNpmName(projectName);
    if (!valid) {
        console.error(
            `Could not create a project called ${chalk.red(`"${projectName}"`)} because of npm naming restrictions:`,
        );

        problems!.forEach((p) => console.error(`    ${chalk.redBold('*')} ${p}`));
        process.exit(1);
    }

    createApp(resolvedProjectPath);
}

const update = checkForUpdate({
    packageName: 'harvey-language',
}).catch(() => null);

async function notifyUpdate(): Promise<void> {
    try {
        const res = await update;
        if (res?.latest) {
            console.log();
            console.log(chalk.yellowBold('A new version of `create-harvey-app` is available!'));
            console.log('You can update by running: ' + chalk.cyan('npm i -g create-next-app'));
            console.log();
        } else {
            console.log(
                chalk.yellow('Successfully created Harvey app, use ') +
                    chalk.redBold(`npx harvey-language watch`) +
                    chalk.yellow(` to start the server`),
            );
        }
        process.exit();
    } catch {
        // ignore error
    }
}
program.parse(process.argv);
/*

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
*/
