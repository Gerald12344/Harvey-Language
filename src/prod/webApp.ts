import { existsSync, mkdirSync, opendirSync, readFileSync, writeFileSync } from 'fs';
import { join, resolve } from 'path';
import { fetchSettings } from '../utils/settings';
import express, { Express } from 'express';

export function SetupUpProdApp({ app, port, shipJS }: { app: Express; port: number; shipJS: boolean }) {
    let settings = fetchSettings();


    let text = readFileSync(join(resolve('./'), `./${settings.inputFolder}/public/index.html`), 'utf8').replace(
        /%public%/g,
        `./public`,
    );

    if (shipJS) {
        text = text
            .replace(/<!-- {{%Build%}} -->/g, `<script defer src="${settings.outputFileName}"></script>`)
            .replace(/<!-- {{%Bundle%}} -->/g, `<script src="./packages/HarvScript_Bundle_1.js"></script>`);
    }

    /*let fileLocation = join(__dirname, '../../packages/harv-script/devfiles.html');

    text = text + readFileSync(fileLocation, 'utf8');*/

    if (!existsSync(join(resolve('./'), `${settings.outputFolder}/public`))) {
        mkdirSync(join(resolve('./'), `${settings.outputFolder}/public`));
    }

    writeFileSync(join(resolve('./'), `${settings.outputFolder}/index.html`), text.replace(/\r?\n|\r/g, ''));

    const dir = opendirSync(`${settings.inputFolder}/public/imports`);
    let dirent;
    while ((dirent = dir.readSync()) !== null) {
        writeFileSync(
            `./${settings.outputFolder}/public/${dirent.name}`,
            readFileSync(join(resolve('./'), `${settings.inputFolder}/public/imports/${dirent.name}`), 'utf-8'),
        );
    }
    dir.closeSync();

    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });

    return text;
}
