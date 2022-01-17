import { customPlugin } from '../types/maintypes';
import { fetchSettings } from './settings';
import * as path from 'path';

let commands: {
    [key: string]: {
        Command: CallableFunction;
        Dependencies: CallableFunction;
    };
} = {};

export function loadPlugins() {
    let settings = fetchSettings();
    if (settings.pluginsFolder === '' || settings.pluginsFolder === '') return;

    let pluginSettings = require(`../${settings.pluginsFolder}/${settings.pluginsSettings}`);
    pluginSettings.plugins.forEach((element: customPlugin) => {
        commands[element.case] = require(`../${settings.pluginsFolder}/${element.file}`);
    });
}

export function loadHarvScript() {
    let pathIn = path.join(__dirname + '../../../packages/HS5');
    let harvscript = require(pathIn + `/plugins.json`);

    harvscript.plugins.forEach((element: customPlugin) => {
        commands[element.case] = require(`${pathIn}/${element.file}`);
    });
}

export function fetchPlugins() {
    return commands;
}
