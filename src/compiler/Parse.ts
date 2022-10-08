// Harvey Randall 2020-2022, Parser to turn Tokens into AST

// [Tokeniser] -> [Paset (AST)] -> [Traverser]

import { astRoot, mainNode, outputTozenised } from '../types/maintypes';
import { fetchLogger } from '../utils/logger';

export function parser(tokens: outputTozenised[]) {
    let current = 0;
    function walk(): mainNode {
        let token = tokens[current];

        if (token.type === 'name') {
            current++;
            return {
                type: 'NameLiteral',
                value: token.value,
            };
        }
        if (token.type === 'number') {
            current++;
            return {
                type: 'NumberLiteral',
                value: token.value,
            };
        }
        if (token.type === 'string') {
            current++;

            return {
                type: 'StringLiteral',
                value: token.value,
            };
        }
        if (token.type === 'paren' && token.value === '=') {
            token = tokens[++current];
            let node: mainNode = {
                type: 'CallExpression',
                name: token.value,
                params: [],
            };
        }
        if (token.type === 'paren' && token.value === '<') {
            token = tokens[++current];
            let node: mainNode = {
                type: 'CallExpression',
                name: token.value,
                params: [],
            };
            token = tokens[++current];

            while (token.type !== 'paren' || (token.type === 'paren' && token.value !== '>')) {
                node?.params?.push(walk());
                token = tokens[current];
            }
            current++;
            return node;
        }
        fetchLogger()?.log('error', token.type);
        throw new Error(token.type);
    }
    let ast: astRoot = {
        type: 'Program',
        body: [],
    };

    while (current < tokens.length) {
        ast.body.push(walk());
    }
    return ast;
}
