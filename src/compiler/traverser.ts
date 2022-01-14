// Harvey Randall 2020-2022, Traverse AST

// [Paset (AST)] -> [Transformer] -> [Traverser] -> [Compiler]

// No need for testing just a util function for transformmer

import { astRoot, mainNode, visitors } from '../types/maintypes';
import { fetchLogger } from '../utils/logger';

export function traverser(ast: astRoot, visitor: visitors) {
    function traverseArray(array: mainNode[] | undefined, parent: mainNode) {
        array?.forEach((child) => {
            traverseNode(child, parent);
        });
    }

    function traverseNode(node: mainNode, parent: mainNode | null) {
        let methods = visitor[node.type];
        if (methods && methods.enter) {
            methods.enter(node, parent);
        }

        switch (node.type) {
            case 'Program':
                traverseArray(node.body, node);
                break;
            case 'CallExpression':
                traverseArray(node.params, node);
                break;
            case 'NumberLiteral':
            case 'StringLiteral':
                break;

            default:
                fetchLogger()?.log('error', node.type);
                throw new Error(node.type);
        }

        if (methods && methods.exit) {
            methods.exit(node, parent);
        }
    }
    traverseNode(ast, null);
}
