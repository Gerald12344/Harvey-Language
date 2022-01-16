import { existsSync, mkdirSync, readdirSync, readFileSync, statSync } from 'fs';
import { dirname, join } from 'path';
import { createFolder } from './createApp';

export function getAllFiles(
    dirPath: string,
    arrayOfFiles: { name: string; value: string }[],
    rootDir: string,
): { name: string; value: string }[] {
    let files = readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (statSync(dirPath + '/' + file).isDirectory()) {
            //createFolder(rootDir + '/' + file);
            arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles, rootDir);
        } else {
            arrayOfFiles.push({ name: join(dirPath, '/', file), value: readFileSync(dirPath + '/' + file, 'utf8') });
        }
    });

    return arrayOfFiles;
}

export function ensureDirectoryExistence(filepath: string) {
    var dirnameIn = dirname(filepath);

    if (!existsSync(dirnameIn)) {
        ensureDirectoryExistence(dirnameIn);
    }

    mkdirSync(filepath);
}
