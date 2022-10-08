// Harvey Randall 2020-2022, Transfomer

// [Transformer] -> [Traverser] -> [Compiler]

import { astRoot, expressionIn, finalAST, mainNode } from '../types/maintypes';
import { traverser } from './traverser';

export function transformer(ast: astRoot): finalAST {
    let newAst = {
        type: 'Program',
        body: [],
    };

    ast._context = newAst.body;

    traverser(ast, {
        NumberLiteral: {
            enter(node: mainNode, parent: mainNode) {
                parent?._context?.push({
                    type: 'NumberLiteral',
                    value: node.value,
                });
            },
        },

        StringLiteral: {
            enter(node: mainNode, parent: mainNode) {
                parent?._context?.push({
                    type: 'StringLiteral',
                    value: node.value,
                });
            },
        },

        NameLiteral: {
            enter(node: mainNode, parent: mainNode) {
                parent?._context?.push({
                    type: 'NameLiteral',
                    value: node.value,
                });
            },
        },

        CallExpression: {
            enter(node: mainNode, parent: mainNode) {
                let expression: expressionIn = {
                    type: 'CallExpression',
                    callee: {
                        type: 'Identifier',
                        name: node.name,
                    },
                    arguments: [],
                };
                node._context = expression.arguments;

                if (parent.type !== 'CallExpression') {
                    expression = {
                        type: 'ExpressionStatement',
                        expression: expression,
                    };
                }
                parent?._context?.push(expression);
            },
        },
    });
    return newAst;
}
