import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { settings } from '../types/settings';

let settingsCurrent: settings;

export function loadSettings(settingsIn: settings | undefined) {
    if (settingsIn === undefined) {
        let rootDir = dirname(require?.main?.filename || '');
        let pathtoRoodDir = join(rootDir, '../');
        settingsCurrent = {
            debug: true,
            version: '0.0.1',
            evalOnCompile: false,
            browserify: true,
            debugFile: false,
            debugFileName: '',
            debugFileLocation: '',
            outputFolder: pathtoRoodDir + '/dist',
            outputFileName: 'output.js',
            dev: false,
            inputFile: '',
            inputFolder: '',
            obuscateOutput: true,
            packagesFolder: join(__dirname, '../../harv-script'),
            pluginsFolder: '',
            pluginsSettings: '',
        };
    } else {
        settingsCurrent = settingsIn;
    }
}

export function lookforSettings() {
    let data: settings | undefined;
    try {
        let inputdata = readFileSync(join(__dirname, '../../../../harveySettings.json'), 'utf8');
        data = JSON.parse(inputdata) as settings;
    } catch {}
    loadSettings(data);
}

export function fetchSettings() {
    return settingsCurrent;
}
