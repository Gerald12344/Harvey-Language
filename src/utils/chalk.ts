let colours = {
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    cyan: '\x1b[36m',
    magenta: '\x1b[35m',
    text: '\x1b[0m',
    bold: '\x1b[1m',
};

export class ChalkClass {
    green(text: string): string {
        return colours.green + text + colours.text;
    }

    red(text: string): string {
        return colours.red + text + colours.text;
    }

    yellow(text: string): string {
        return colours.yellow + text + colours.text;
    }

    cyan(text: string): string {
        return colours.cyan + text + colours.text;
    }

    magenta(text: string): string {
        return colours.magenta + text + colours.text;
    }

    redBold(text: string): string {
        return colours.red + colours.bold + text + colours.text;
    }

    yellowBold(text: string): string {
        return colours.yellow + colours.bold + text + colours.text;
    }
}
