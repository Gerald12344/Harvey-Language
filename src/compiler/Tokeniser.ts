// Harvey Randall 2020-2022, Tokenizer to turn String into Tokens

// [String] -> [Tokeniser] -> [Parser]

import { outputTozenised } from '../types/maintypes';
import { fetchLogger } from '../utils/logger';

export function tokenizer(input: string): outputTozenised[] {
    let current = 0;
    const tokens = [];

    while (current < input.length) {
        let char = input[current];
        if (char === '<') {
            tokens.push({
                type: 'paren',
                value: '<',
            });
            current++;
            continue;
        }
        if (char === '=') {
            tokens.push({
                type: 'paren',
                value: '=',
            });
            current++;
            continue;
        }

        if (char === '>') {
            tokens.push({
                type: 'paren',
                value: '>',
            });
            current++;
            continue;
        }

        const WHITESPACE = /\s/;
        if (WHITESPACE.test(char)) {
            current++;
            continue;
        }
        const NUMBERS = /[0-9]/;
        if (NUMBERS.test(char)) {
            let value = '';
            while (NUMBERS.test(char)) {
                value += char;
                char = input[++current];
            }
            tokens.push({ type: 'number', value });
            continue;
        }
        if (char === '"') {
            let value = '';
            char = input[++current];
            while (char !== '"') {
                value += char;
                char = input[++current];
            }
            char = input[++current];
            tokens.push({ type: 'string', value });

            continue;
        }

        const LETTERS = /[a-z]/i;
        if (LETTERS.test(char) || char === '.') {
            let value = '';
            while (LETTERS.test(char) || char === '.') {
                value += char;
                char = input[++current];
            }
            tokens.push({ type: 'name', value });

            continue;
        }

        fetchLogger()?.log('error', 'Yikes, I dont know what this character is: ' + char);
        throw new Error('I dont know what this character is: ' + char);
    }



    return tokens;
}
