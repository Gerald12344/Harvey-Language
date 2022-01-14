import { watch } from 'chokidar';
import { fetchLogger } from './logger';
import { fetchSettings } from './settings';
import * as express from 'express';
import { existsSync, mkdirSync, opendirSync, readFile, readFileSync, writeFileSync } from 'fs';
import { compileFile } from '../compiler/compilerEntry';
import { join } from 'path/posix';

let lastUpdate = Date.now();
let compileStartTime = Date.now();
const app = express();
app.use(express.json());

let setupCompiler = () => {
    app.get('/api/recompiling', (req, res) => {
        res.send(`${compileStartTime}`);
    });

    let settings = fetchSettings();
    let logger = fetchLogger();

    compileStartTime = Date.now();
    readFile(`./${settings.inputFolder}/${settings.inputFile}`, 'utf8', async (err, data) => {
        let input = data;
        let CompiledJS: string = '';
        try {
            CompiledJS = await compileFile(input, true);
        } catch (e) {
            logger?.log('error', e);
            logger?.log('warn', 'FATAL COMPLATION ERROR');
        }

        if (settings.evalOnCompile) {
            logger?.log(
                'warn',
                `Running with in a eval loop() for production builds please use ./${settings.outputFolder}/${settings.outputFileName}`,
            );
            if (settings.debug) {
                logger?.log('debug', 'To change this go to the harveySettings.json file and set evalOnFinish to false');
            }
            if (settings.debug) {
                logger?.log('info', '-----------------------[Compiler Successfull]-----------------------');
                logger?.log('debug', `Thank you for using the .Harvey Programming Language. Happy Hacking.`);
                logger?.log('debug', `Compiler competely successfully now attempting to run the code.`);
                logger?.log('info', '--------------------------------------------------------------------');
            }
            eval(CompiledJS);
        }
        lastUpdate = Date.now();
        if (settings.dev === true) {
            let text = readFileSync(`./${settings.inputFolder}/public/index.html`, 'utf8')
                .replace(/%build%/g, `${settings.outputFileName}`)
                .replace(/%public%/g, `./public`)
                .replace(/<!-- {{%Bundle%}} -->/g, `<script src="./packages/HarvScript_Bundle_1.js"></script>`);

            text = text + readFileSync(`./compiler/devfiles.html`, 'utf8');

            if (!existsSync(`${settings.outputFolder}/public`)) {
                mkdirSync(`${settings.outputFolder}/public`);
            }

            //fs.writeFileSync(`./${settings.outputFolder}/devfiles.js`, fs.readFileSync(`./compiler/devfiles.js`, 'utf8'));

            writeFileSync(`./${settings.outputFolder}/index.html`, text.replace(/\r?\n|\r/g, ''));

            const dir = opendirSync(`${settings.inputFolder}/public/imports`);
            let dirent;
            while ((dirent = dir.readSync()) !== null) {
                writeFileSync(
                    `./${settings.outputFolder}/public/${dirent.name}`,
                    readFileSync(`${settings.inputFolder}/public/imports/${dirent.name}`, 'utf-8'),
                );
            }
            dir.closeSync();

            app.use(express.static(join(__dirname, `../dist`)));

            app.get('/api/lastupdate', (req, res) => {
                res.send(`${lastUpdate}`);
            });

            app.post('/api/error', (req, res) => {
                logger?.log('error', `Web client reported error, ${req.body.data} `);
            });

            app.get('*', (req, res) => {
                res.sendFile(join(__dirname, `../${settings.outputFolder}/index.html`));
            });
        }
    });
};

export function watchChangesWithWebServer() {
    const settings = fetchSettings();

    var watcher = watch(`./${settings.inputFolder}`, {
        ignored: /^\./,
        persistent: true,
    });
    let logger = fetchLogger();
    let startTime = Date.now();
    let restart = () => {
        if (Date.now() - 5000 < startTime) {
            return;
        }
        setupCompiler();
    };
    watcher
        .on('add', function (path) {
            logger?.log('debug', `File added ${path}, starting recomplation`);
            restart();
        })
        .on('change', function (path) {
            logger?.log('debug', `File updated ${path}, starting recomplation`);
            restart();
        })
        .on('unlink', function (path) {
            logger?.log('debug', `File deleted ${path}, starting recomplation`);
            restart();
        })
        .on('error', function (error) {
            logger?.log('error', `Error happened, ${error}`);
        });

    app.listen(3000, () => logger?.log('debug', 'App listening on port 3000!'));
}
