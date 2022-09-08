import { existsSync, fstat, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'fs';
import { join, relative } from 'path';
import { ChalkClass } from './chalk';
import { ensureDirectoryExistence, getAllFiles } from './walkThroughDir';

function createFile(path: string, content: string) {
    writeFileSync(path, content);
}

export function createFolder(path: string) {
    if (!existsSync(path)) {
        mkdirSync(path);
    }
}

export async function createApp(dirName: string) {
    dirName = join(dirName, '../');
    let walk = getAllFiles(join(__dirname, `../../template`), [], dirName);

    let files = walk.map((e) => {
        return {
            name: join(dirName, e.name.replace(/\/\//g, '/').replace(join(__dirname, `../../template`), '')),
            value: e.value,
        };
    });
    files.forEach((e) => {
        try {
            try {
                ensureDirectoryExistence(join(e.name, '../'));
            } catch {}

            createFile(e.name.replace(/\/\//g, '/'), e.value);
        } catch (err) {
            console.log(err);
        }
    });

    try {
        let json = readFileSync(join(__dirname, `../../template/package.json`), 'utf-8');
        writeFileSync(
            join(dirName, 'package.json'),
            JSON.stringify({
                ...JSON.parse(json),
                scripts: {
                    start: 'npx harvey-language watch',
                    build: 'npx harvey-language compile',
                },
            }),
        );
    } catch {
        console.log(new ChalkClass().redBold('no package.json'));
    }
}
