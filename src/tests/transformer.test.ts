import { transformer } from '../compiler/Transformer';
let astOneIn = {
    type: 'Program',
    body: [
        {
            type: 'CallExpression',
            name: 'sayHello',
            params: [{ type: 'CallExpression', name: 'string', params: [{ type: 'StringLiteral', value: 'hello' }] }],
        },
        {
            type: 'CallExpression',
            name: 'letsmake',
            params: [
                { type: 'StringLiteral', value: 'TOKEN' },
                { type: 'CallExpression', name: 'string', params: [{ type: 'StringLiteral', value: 'TOKEN' }] },
            ],
        },
        {
            type: 'CallExpression',
            name: 'letsmake',
            params: [
                { type: 'StringLiteral', value: 'Discord' },
                {
                    type: 'CallExpression',
                    name: 'iNeed',
                    params: [
                        {
                            type: 'CallExpression',
                            name: 'string',
                            params: [{ type: 'StringLiteral', value: 'discord.js' }],
                        },
                    ],
                },
            ],
        },
        {
            type: 'CallExpression',
            name: 'letsmake',
            params: [
                { type: 'StringLiteral', value: 'client' },
                {
                    type: 'CallExpression',
                    name: 'new',
                    params: [
                        {
                            type: 'CallExpression',
                            name: 'call',
                            params: [{ type: 'StringLiteral', value: 'Discord.Client' }],
                        },
                    ],
                },
            ],
        },
        {
            type: 'CallExpression',
            name: 'call',
            params: [
                { type: 'StringLiteral', value: 'client.on' },
                { type: 'StringLiteral', value: 'ready' },
                {
                    type: 'CallExpression',
                    name: 'function',
                    params: [
                        { type: 'StringLiteral', value: 'data' },
                        {
                            type: 'CallExpression',
                            name: 'body',
                            params: [
                                {
                                    type: 'CallExpression',
                                    name: 'sendOut',
                                    params: [
                                        {
                                            type: 'CallExpression',
                                            name: 'add',
                                            params: [
                                                {
                                                    type: 'CallExpression',
                                                    name: 'string',
                                                    params: [
                                                        { type: 'StringLiteral', value: 'Current' },
                                                        { type: 'StringLiteral', value: 'Logged' },
                                                        { type: 'StringLiteral', value: 'in' },
                                                        { type: 'StringLiteral', value: 'as' },
                                                    ],
                                                },
                                                {
                                                    type: 'CallExpression',
                                                    name: 'var',
                                                    params: [{ type: 'StringLiteral', value: 'client.user.username' }],
                                                },
                                                {
                                                    type: 'CallExpression',
                                                    name: 'string',
                                                    params: [{ type: 'StringLiteral', value: '#' }],
                                                },
                                                {
                                                    type: 'CallExpression',
                                                    name: 'var',
                                                    params: [
                                                        { type: 'StringLiteral', value: 'client.user.discriminator' },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: 'CallExpression',
                                    name: 'sendOut',
                                    params: [
                                        {
                                            type: 'CallExpression',
                                            name: 'add',
                                            params: [
                                                { type: 'StringLiteral', value: 'Current in ' },
                                                {
                                                    type: 'CallExpression',
                                                    name: 'var',
                                                    params: [
                                                        { type: 'StringLiteral', value: 'client.guilds.cache.size' },
                                                        {
                                                            type: 'CallExpression',
                                                            name: 'sring',
                                                            params: [{ type: 'StringLiteral', value: 'servers' }],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            type: 'CallExpression',
            name: 'call',
            params: [
                { type: 'StringLiteral', value: 'client.on' },
                { type: 'StringLiteral', value: 'message' },
                {
                    type: 'CallExpression',
                    name: 'async',
                    params: [
                        {
                            type: 'CallExpression',
                            name: 'Arrowfunc',
                            params: [
                                { type: 'StringLiteral', value: 'message' },
                                {
                                    type: 'CallExpression',
                                    name: 'body',
                                    params: [
                                        {
                                            type: 'CallExpression',
                                            name: 'if',
                                            params: [
                                                {
                                                    type: 'CallExpression',
                                                    name: 'and',
                                                    params: [
                                                        {
                                                            type: 'CallExpression',
                                                            name: 'equal',
                                                            params: [
                                                                { type: 'StringLiteral', value: 'message.content' },
                                                                { type: 'StringLiteral', value: 'hello' },
                                                            ],
                                                        },
                                                        {
                                                            type: 'CallExpression',
                                                            name: 'equal',
                                                            params: [
                                                                {
                                                                    type: 'CallExpression',
                                                                    name: 'ToNumber',
                                                                    params: [
                                                                        {
                                                                            type: 'StringLiteral',
                                                                            value: 'message.author.bot',
                                                                        },
                                                                    ],
                                                                },
                                                                { type: 'CallExpression', name: 'false', params: [] },
                                                            ],
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: 'CallExpression',
                                                    name: 'body',
                                                    params: [
                                                        {
                                                            type: 'CallExpression',
                                                            name: 'call',
                                                            params: [
                                                                { type: 'StringLiteral', value: 'message.reply' },
                                                                { type: 'StringLiteral', value: 'hello' },
                                                            ],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            type: 'CallExpression',
            name: 'letsmake',
            params: [
                { type: 'StringLiteral', value: 'functionIWant' },
                {
                    type: 'CallExpression',
                    name: 'Arrowfunc',
                    params: [
                        { type: 'StringLiteral', value: 'input' },
                        { type: 'StringLiteral', value: 'secondInput' },
                        {
                            type: 'CallExpression',
                            name: 'body',
                            params: [
                                {
                                    type: 'CallExpression',
                                    name: 'sendOut',
                                    params: [
                                        {
                                            type: 'CallExpression',
                                            name: 'var',
                                            params: [{ type: 'StringLiteral', value: 'input' }],
                                        },
                                    ],
                                },
                                {
                                    type: 'CallExpression',
                                    name: 'sendOut',
                                    params: [
                                        {
                                            type: 'CallExpression',
                                            name: 'var',
                                            params: [{ type: 'StringLiteral', value: 'secondInput' }],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            type: 'CallExpression',
            name: 'letsmake',
            params: [
                { type: 'StringLiteral', value: 'AsyncFunction' },
                {
                    type: 'CallExpression',
                    name: 'async',
                    params: [
                        {
                            type: 'CallExpression',
                            name: 'Arrowfunc',
                            params: [
                                { type: 'StringLiteral', value: 'input' },
                                {
                                    type: 'CallExpression',
                                    name: 'body',
                                    params: [
                                        {
                                            type: 'CallExpression',
                                            name: 'sendOut',
                                            params: [
                                                {
                                                    type: 'CallExpression',
                                                    name: 'var',
                                                    params: [{ type: 'StringLiteral', value: 'input' }],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            type: 'CallExpression',
            name: 'call',
            params: [
                { type: 'StringLiteral', value: 'functionIWant' },
                { type: 'CallExpression', name: 'string', params: [{ type: 'StringLiteral', value: 'hello' }] },
                { type: 'CallExpression', name: 'string', params: [{ type: 'StringLiteral', value: 'Second Input' }] },
            ],
        },
        {
            type: 'CallExpression',
            name: 'call',
            params: [
                { type: 'StringLiteral', value: 'AsyncFunction' },
                { type: 'StringLiteral', value: 'async' },
            ],
        },
        {
            type: 'CallExpression',
            name: 'after',
            params: [
                {
                    type: 'CallExpression',
                    name: 'Arrowfunc',
                    params: [
                        { type: 'StringLiteral', value: 'input' },
                        {
                            type: 'CallExpression',
                            name: 'body',
                            params: [
                                {
                                    type: 'CallExpression',
                                    name: 'sendOut',
                                    params: [{ type: 'StringLiteral', value: 'done' }],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            type: 'CallExpression',
            name: 'error',
            params: [
                {
                    type: 'CallExpression',
                    name: 'Arrowfunc',
                    params: [
                        { type: 'StringLiteral', value: 'input' },
                        {
                            type: 'CallExpression',
                            name: 'body',
                            params: [
                                {
                                    type: 'CallExpression',
                                    name: 'sendOut',
                                    params: [
                                        {
                                            type: 'CallExpression',
                                            name: 'add',
                                            params: [
                                                {
                                                    type: 'CallExpression',
                                                    name: 'string',
                                                    params: [{ type: 'StringLiteral', value: 'There was a error ' }],
                                                },
                                                {
                                                    type: 'CallExpression',
                                                    name: 'var',
                                                    params: [{ type: 'StringLiteral', value: 'input' }],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            type: 'CallExpression',
            name: 'letsmake',
            params: [
                { type: 'StringLiteral', value: 'Newer' },
                { type: 'StringLiteral', value: 'hello' },
            ],
        },
        {
            type: 'CallExpression',
            name: 'function',
            params: [
                { type: 'StringLiteral', value: 'hello' },
                { type: 'StringLiteral', value: 'input' },
                {
                    type: 'CallExpression',
                    name: 'body',
                    params: [
                        {
                            type: 'CallExpression',
                            name: 'reply',
                            params: [
                                {
                                    type: 'CallExpression',
                                    name: 'var',
                                    params: [{ type: 'StringLiteral', value: 'input' }],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            type: 'CallExpression',
            name: 'letsmake',
            params: [
                { type: 'StringLiteral', value: 'PromiseMaker' },
                {
                    type: 'CallExpression',
                    name: 'Arrowfunc',
                    params: [
                        { type: 'StringLiteral', value: 'input' },
                        {
                            type: 'CallExpression',
                            name: 'body',
                            params: [
                                {
                                    type: 'CallExpression',
                                    name: 'promise',
                                    params: [
                                        { type: 'StringLiteral', value: 'resolve' },
                                        { type: 'StringLiteral', value: 'reject' },
                                        {
                                            type: 'CallExpression',
                                            name: 'body',
                                            params: [
                                                {
                                                    type: 'CallExpression',
                                                    name: 'sendOut',
                                                    params: [
                                                        {
                                                            type: 'CallExpression',
                                                            name: 'var',
                                                            params: [{ type: 'StringLiteral', value: 'input' }],
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: 'CallExpression',
                                                    name: 'if',
                                                    params: [
                                                        {
                                                            type: 'CallExpression',
                                                            name: 'equal',
                                                            params: [
                                                                {
                                                                    type: 'CallExpression',
                                                                    name: 'var',
                                                                    params: [{ type: 'StringLiteral', value: 'input' }],
                                                                },
                                                                { type: 'StringLiteral', value: "'hello'" },
                                                            ],
                                                        },
                                                        {
                                                            type: 'CallExpression',
                                                            name: 'body',
                                                            params: [
                                                                {
                                                                    type: 'CallExpression',
                                                                    name: 'call',
                                                                    params: [
                                                                        { type: 'StringLiteral', value: 'reject' },
                                                                        {
                                                                            type: 'CallExpression',
                                                                            name: 'string',
                                                                            params: [
                                                                                {
                                                                                    type: 'StringLiteral',
                                                                                    value: 'Not going to lie there is a errror',
                                                                                },
                                                                            ],
                                                                        },
                                                                    ],
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: 'CallExpression',
                                                    name: 'if',
                                                    params: [
                                                        {
                                                            type: 'CallExpression',
                                                            name: 'notequal',
                                                            params: [
                                                                {
                                                                    type: 'CallExpression',
                                                                    name: 'var',
                                                                    params: [{ type: 'StringLiteral', value: 'input' }],
                                                                },
                                                                { type: 'StringLiteral', value: "'hello'" },
                                                            ],
                                                        },
                                                        {
                                                            type: 'CallExpression',
                                                            name: 'body',
                                                            params: [
                                                                {
                                                                    type: 'CallExpression',
                                                                    name: 'call',
                                                                    params: [
                                                                        { type: 'StringLiteral', value: 'resolve' },
                                                                    ],
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            type: 'CallExpression',
            name: 'letsmake',
            params: [
                { type: 'StringLiteral', value: 'reponse' },
                {
                    type: 'CallExpression',
                    name: 'call',
                    params: [
                        { type: 'StringLiteral', value: 'PromiseMaker' },
                        { type: 'CallExpression', name: 'string', params: [{ type: 'StringLiteral', value: 'hello' }] },
                    ],
                },
            ],
        },
        {
            type: 'CallExpression',
            name: 'error',
            params: [
                {
                    type: 'CallExpression',
                    name: 'Arrowfunc',
                    params: [
                        { type: 'StringLiteral', value: 'input' },
                        {
                            type: 'CallExpression',
                            name: 'body',
                            params: [
                                {
                                    type: 'CallExpression',
                                    name: 'sendOut',
                                    params: [
                                        {
                                            type: 'CallExpression',
                                            name: 'add',
                                            params: [
                                                {
                                                    type: 'CallExpression',
                                                    name: 'string',
                                                    params: [{ type: 'StringLiteral', value: 'There was a error ' }],
                                                },
                                                {
                                                    type: 'CallExpression',
                                                    name: 'var',
                                                    params: [{ type: 'StringLiteral', value: 'input' }],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            type: 'CallExpression',
            name: 'call',
            params: [
                { type: 'StringLiteral', value: 'PromiseMaker' },
                { type: 'CallExpression', name: 'string', params: [{ type: 'StringLiteral', value: 'anything else' }] },
            ],
        },
        {
            type: 'CallExpression',
            name: 'error',
            params: [
                {
                    type: 'CallExpression',
                    name: 'Arrowfunc',
                    params: [
                        { type: 'StringLiteral', value: 'input' },
                        {
                            type: 'CallExpression',
                            name: 'body',
                            params: [
                                {
                                    type: 'CallExpression',
                                    name: 'sendOut',
                                    params: [
                                        {
                                            type: 'CallExpression',
                                            name: 'add',
                                            params: [
                                                {
                                                    type: 'CallExpression',
                                                    name: 'string',
                                                    params: [{ type: 'StringLiteral', value: 'There was a error ' }],
                                                },
                                                {
                                                    type: 'CallExpression',
                                                    name: 'var',
                                                    params: [{ type: 'StringLiteral', value: 'input' }],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            type: 'CallExpression',
            name: 'after',
            params: [
                {
                    type: 'CallExpression',
                    name: 'Arrowfunc',
                    params: [
                        { type: 'StringLiteral', value: 'input' },
                        {
                            type: 'CallExpression',
                            name: 'body',
                            params: [
                                {
                                    type: 'CallExpression',
                                    name: 'sendOut',
                                    params: [
                                        {
                                            type: 'CallExpression',
                                            name: 'string',
                                            params: [{ type: 'StringLiteral', value: 'Promises successful' }],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            type: 'CallExpression',
            name: 'call',
            params: [
                { type: 'StringLiteral', value: 'PromiseMaker' },
                { type: 'CallExpression', name: 'string', params: [{ type: 'StringLiteral', value: 'hello' }] },
            ],
        },
        {
            type: 'CallExpression',
            name: 'after',
            params: [
                {
                    type: 'CallExpression',
                    name: 'Arrowfunc',
                    params: [
                        { type: 'StringLiteral', value: 'input' },
                        {
                            type: 'CallExpression',
                            name: 'body',
                            params: [
                                {
                                    type: 'CallExpression',
                                    name: 'sendOut',
                                    params: [
                                        {
                                            type: 'CallExpression',
                                            name: 'string',
                                            params: [{ type: 'StringLiteral', value: 'Promises successful' }],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            type: 'CallExpression',
            name: 'error',
            params: [
                {
                    type: 'CallExpression',
                    name: 'Arrowfunc',
                    params: [
                        { type: 'StringLiteral', value: 'input' },
                        {
                            type: 'CallExpression',
                            name: 'body',
                            params: [
                                {
                                    type: 'CallExpression',
                                    name: 'sendOut',
                                    params: [
                                        {
                                            type: 'CallExpression',
                                            name: 'add',
                                            params: [
                                                {
                                                    type: 'CallExpression',
                                                    name: 'string',
                                                    params: [{ type: 'StringLiteral', value: 'There was a error ' }],
                                                },
                                                {
                                                    type: 'CallExpression',
                                                    name: 'var',
                                                    params: [{ type: 'StringLiteral', value: 'input' }],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            type: 'CallExpression',
            name: 'call',
            params: [
                { type: 'StringLiteral', value: 'client.login' },
                { type: 'CallExpression', name: 'var', params: [{ type: 'StringLiteral', value: 'TOKEN' }] },
            ],
        },
    ],
};

let astTwoIn = {
    type: 'Program',
    body: [
        {
            type: 'CallExpression',
            name: 'functionGlobalCSSMainparent',
            params: [
                {
                    type: 'CallExpression',
                    name: 'body',
                    params: [
                        {
                            type: 'CallExpression',
                            name: 'render',
                            params: [
                                { type: 'CallExpression', name: 'varMainparent', params: [] },
                                {
                                    type: 'CallExpression',
                                    name: 'style',
                                    params: [
                                        {
                                            type: 'CallExpression',
                                            name: 'string',
                                            params: [
                                                {
                                                    type: 'StringLiteral',
                                                    value: '\n.nav-button{\nbackground-color:#4CAF50;/*Green*/\nborder:none;\ncolor:white;\npadding:15px32px;\ntext-align:center;\ntext-decoration:none;\nfont-size:16px;\ncursor:pointer;\noutline:none;\n}\n.nav-button:hover{\nbackground-color:#3e8e41;\n}\nbody{\nborder:0;\n}\n.hidden_tag{\ndisplay:none;\n}\n/*Yikesthishandlesthesmalltext*/\n.downabit{\ntransform:translate(0,100%);\n}\n',
                                                },
                                            ],
                                        },
                                        { type: 'CallExpression', name: 'empty', params: [] },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};

test('Transformer, Standard Harvscript', () => {
    expect(transformer(astOneIn)).toStrictEqual({
        type: 'Program',
        body: [
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'CallExpression',
                    callee: { type: 'Identifier', name: 'sayHello' },
                    arguments: [
                        {
                            type: 'CallExpression',
                            callee: { type: 'Identifier', name: 'string' },
                            arguments: [{ type: 'StringLiteral', value: 'hello' }],
                        },
                    ],
                },
            },
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'CallExpression',
                    callee: { type: 'Identifier', name: 'letsmake' },
                    arguments: [
                        { type: 'StringLiteral', value: 'TOKEN' },
                        {
                            type: 'CallExpression',
                            callee: { type: 'Identifier', name: 'string' },
                            arguments: [{ type: 'StringLiteral', value: 'TOKEN' }],
                        },
                    ],
                },
            },
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'CallExpression',
                    callee: { type: 'Identifier', name: 'letsmake' },
                    arguments: [
                        { type: 'StringLiteral', value: 'Discord' },
                        {
                            type: 'CallExpression',
                            callee: { type: 'Identifier', name: 'iNeed' },
                            arguments: [
                                {
                                    type: 'CallExpression',
                                    callee: { type: 'Identifier', name: 'string' },
                                    arguments: [{ type: 'StringLiteral', value: 'discord.js' }],
                                },
                            ],
                        },
                    ],
                },
            },
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'CallExpression',
                    callee: { type: 'Identifier', name: 'letsmake' },
                    arguments: [
                        { type: 'StringLiteral', value: 'client' },
                        {
                            type: 'CallExpression',
                            callee: { type: 'Identifier', name: 'new' },
                            arguments: [
                                {
                                    type: 'CallExpression',
                                    callee: { type: 'Identifier', name: 'call' },
                                    arguments: [{ type: 'StringLiteral', value: 'Discord.Client' }],
                                },
                            ],
                        },
                    ],
                },
            },
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'CallExpression',
                    callee: { type: 'Identifier', name: 'call' },
                    arguments: [
                        { type: 'StringLiteral', value: 'client.on' },
                        { type: 'StringLiteral', value: 'ready' },
                        {
                            type: 'CallExpression',
                            callee: { type: 'Identifier', name: 'function' },
                            arguments: [
                                { type: 'StringLiteral', value: 'data' },
                                {
                                    type: 'CallExpression',
                                    callee: { type: 'Identifier', name: 'body' },
                                    arguments: [
                                        {
                                            type: 'CallExpression',
                                            callee: { type: 'Identifier', name: 'sendOut' },
                                            arguments: [
                                                {
                                                    type: 'CallExpression',
                                                    callee: { type: 'Identifier', name: 'add' },
                                                    arguments: [
                                                        {
                                                            type: 'CallExpression',
                                                            callee: { type: 'Identifier', name: 'string' },
                                                            arguments: [
                                                                { type: 'StringLiteral', value: 'Current' },
                                                                { type: 'StringLiteral', value: 'Logged' },
                                                                { type: 'StringLiteral', value: 'in' },
                                                                { type: 'StringLiteral', value: 'as' },
                                                            ],
                                                        },
                                                        {
                                                            type: 'CallExpression',
                                                            callee: { type: 'Identifier', name: 'var' },
                                                            arguments: [
                                                                {
                                                                    type: 'StringLiteral',
                                                                    value: 'client.user.username',
                                                                },
                                                            ],
                                                        },
                                                        {
                                                            type: 'CallExpression',
                                                            callee: { type: 'Identifier', name: 'string' },
                                                            arguments: [{ type: 'StringLiteral', value: '#' }],
                                                        },
                                                        {
                                                            type: 'CallExpression',
                                                            callee: { type: 'Identifier', name: 'var' },
                                                            arguments: [
                                                                {
                                                                    type: 'StringLiteral',
                                                                    value: 'client.user.discriminator',
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            type: 'CallExpression',
                                            callee: { type: 'Identifier', name: 'sendOut' },
                                            arguments: [
                                                {
                                                    type: 'CallExpression',
                                                    callee: { type: 'Identifier', name: 'add' },
                                                    arguments: [
                                                        { type: 'StringLiteral', value: 'Current in ' },
                                                        {
                                                            type: 'CallExpression',
                                                            callee: { type: 'Identifier', name: 'var' },
                                                            arguments: [
                                                                {
                                                                    type: 'StringLiteral',
                                                                    value: 'client.guilds.cache.size',
                                                                },
                                                                {
                                                                    type: 'CallExpression',
                                                                    callee: { type: 'Identifier', name: 'sring' },
                                                                    arguments: [
                                                                        { type: 'StringLiteral', value: 'servers' },
                                                                    ],
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            },
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'CallExpression',
                    callee: { type: 'Identifier', name: 'call' },
                    arguments: [
                        { type: 'StringLiteral', value: 'client.on' },
                        { type: 'StringLiteral', value: 'message' },
                        {
                            type: 'CallExpression',
                            callee: { type: 'Identifier', name: 'async' },
                            arguments: [
                                {
                                    type: 'CallExpression',
                                    callee: { type: 'Identifier', name: 'Arrowfunc' },
                                    arguments: [
                                        { type: 'StringLiteral', value: 'message' },
                                        {
                                            type: 'CallExpression',
                                            callee: { type: 'Identifier', name: 'body' },
                                            arguments: [
                                                {
                                                    type: 'CallExpression',
                                                    callee: { type: 'Identifier', name: 'if' },
                                                    arguments: [
                                                        {
                                                            type: 'CallExpression',
                                                            callee: { type: 'Identifier', name: 'and' },
                                                            arguments: [
                                                                {
                                                                    type: 'CallExpression',
                                                                    callee: { type: 'Identifier', name: 'equal' },
                                                                    arguments: [
                                                                        {
                                                                            type: 'StringLiteral',
                                                                            value: 'message.content',
                                                                        },
                                                                        { type: 'StringLiteral', value: 'hello' },
                                                                    ],
                                                                },
                                                                {
                                                                    type: 'CallExpression',
                                                                    callee: { type: 'Identifier', name: 'equal' },
                                                                    arguments: [
                                                                        {
                                                                            type: 'CallExpression',
                                                                            callee: {
                                                                                type: 'Identifier',
                                                                                name: 'ToNumber',
                                                                            },
                                                                            arguments: [
                                                                                {
                                                                                    type: 'StringLiteral',
                                                                                    value: 'message.author.bot',
                                                                                },
                                                                            ],
                                                                        },
                                                                        {
                                                                            type: 'CallExpression',
                                                                            callee: {
                                                                                type: 'Identifier',
                                                                                name: 'false',
                                                                            },
                                                                            arguments: [],
                                                                        },
                                                                    ],
                                                                },
                                                            ],
                                                        },
                                                        {
                                                            type: 'CallExpression',
                                                            callee: { type: 'Identifier', name: 'body' },
                                                            arguments: [
                                                                {
                                                                    type: 'CallExpression',
                                                                    callee: { type: 'Identifier', name: 'call' },
                                                                    arguments: [
                                                                        {
                                                                            type: 'StringLiteral',
                                                                            value: 'message.reply',
                                                                        },
                                                                        { type: 'StringLiteral', value: 'hello' },
                                                                    ],
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            },
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'CallExpression',
                    callee: { type: 'Identifier', name: 'letsmake' },
                    arguments: [
                        { type: 'StringLiteral', value: 'functionIWant' },
                        {
                            type: 'CallExpression',
                            callee: { type: 'Identifier', name: 'Arrowfunc' },
                            arguments: [
                                { type: 'StringLiteral', value: 'input' },
                                { type: 'StringLiteral', value: 'secondInput' },
                                {
                                    type: 'CallExpression',
                                    callee: { type: 'Identifier', name: 'body' },
                                    arguments: [
                                        {
                                            type: 'CallExpression',
                                            callee: { type: 'Identifier', name: 'sendOut' },
                                            arguments: [
                                                {
                                                    type: 'CallExpression',
                                                    callee: { type: 'Identifier', name: 'var' },
                                                    arguments: [{ type: 'StringLiteral', value: 'input' }],
                                                },
                                            ],
                                        },
                                        {
                                            type: 'CallExpression',
                                            callee: { type: 'Identifier', name: 'sendOut' },
                                            arguments: [
                                                {
                                                    type: 'CallExpression',
                                                    callee: { type: 'Identifier', name: 'var' },
                                                    arguments: [{ type: 'StringLiteral', value: 'secondInput' }],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            },
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'CallExpression',
                    callee: { type: 'Identifier', name: 'letsmake' },
                    arguments: [
                        { type: 'StringLiteral', value: 'AsyncFunction' },
                        {
                            type: 'CallExpression',
                            callee: { type: 'Identifier', name: 'async' },
                            arguments: [
                                {
                                    type: 'CallExpression',
                                    callee: { type: 'Identifier', name: 'Arrowfunc' },
                                    arguments: [
                                        { type: 'StringLiteral', value: 'input' },
                                        {
                                            type: 'CallExpression',
                                            callee: { type: 'Identifier', name: 'body' },
                                            arguments: [
                                                {
                                                    type: 'CallExpression',
                                                    callee: { type: 'Identifier', name: 'sendOut' },
                                                    arguments: [
                                                        {
                                                            type: 'CallExpression',
                                                            callee: { type: 'Identifier', name: 'var' },
                                                            arguments: [{ type: 'StringLiteral', value: 'input' }],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            },
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'CallExpression',
                    callee: { type: 'Identifier', name: 'call' },
                    arguments: [
                        { type: 'StringLiteral', value: 'functionIWant' },
                        {
                            type: 'CallExpression',
                            callee: { type: 'Identifier', name: 'string' },
                            arguments: [{ type: 'StringLiteral', value: 'hello' }],
                        },
                        {
                            type: 'CallExpression',
                            callee: { type: 'Identifier', name: 'string' },
                            arguments: [{ type: 'StringLiteral', value: 'Second Input' }],
                        },
                    ],
                },
            },
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'CallExpression',
                    callee: { type: 'Identifier', name: 'call' },
                    arguments: [
                        { type: 'StringLiteral', value: 'AsyncFunction' },
                        { type: 'StringLiteral', value: 'async' },
                    ],
                },
            },
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'CallExpression',
                    callee: { type: 'Identifier', name: 'after' },
                    arguments: [
                        {
                            type: 'CallExpression',
                            callee: { type: 'Identifier', name: 'Arrowfunc' },
                            arguments: [
                                { type: 'StringLiteral', value: 'input' },
                                {
                                    type: 'CallExpression',
                                    callee: { type: 'Identifier', name: 'body' },
                                    arguments: [
                                        {
                                            type: 'CallExpression',
                                            callee: { type: 'Identifier', name: 'sendOut' },
                                            arguments: [{ type: 'StringLiteral', value: 'done' }],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            },
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'CallExpression',
                    callee: { type: 'Identifier', name: 'error' },
                    arguments: [
                        {
                            type: 'CallExpression',
                            callee: { type: 'Identifier', name: 'Arrowfunc' },
                            arguments: [
                                { type: 'StringLiteral', value: 'input' },
                                {
                                    type: 'CallExpression',
                                    callee: { type: 'Identifier', name: 'body' },
                                    arguments: [
                                        {
                                            type: 'CallExpression',
                                            callee: { type: 'Identifier', name: 'sendOut' },
                                            arguments: [
                                                {
                                                    type: 'CallExpression',
                                                    callee: { type: 'Identifier', name: 'add' },
                                                    arguments: [
                                                        {
                                                            type: 'CallExpression',
                                                            callee: { type: 'Identifier', name: 'string' },
                                                            arguments: [
                                                                { type: 'StringLiteral', value: 'There was a error ' },
                                                            ],
                                                        },
                                                        {
                                                            type: 'CallExpression',
                                                            callee: { type: 'Identifier', name: 'var' },
                                                            arguments: [{ type: 'StringLiteral', value: 'input' }],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            },
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'CallExpression',
                    callee: { type: 'Identifier', name: 'letsmake' },
                    arguments: [
                        { type: 'StringLiteral', value: 'Newer' },
                        { type: 'StringLiteral', value: 'hello' },
                    ],
                },
            },
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'CallExpression',
                    callee: { type: 'Identifier', name: 'function' },
                    arguments: [
                        { type: 'StringLiteral', value: 'hello' },
                        { type: 'StringLiteral', value: 'input' },
                        {
                            type: 'CallExpression',
                            callee: { type: 'Identifier', name: 'body' },
                            arguments: [
                                {
                                    type: 'CallExpression',
                                    callee: { type: 'Identifier', name: 'reply' },
                                    arguments: [
                                        {
                                            type: 'CallExpression',
                                            callee: { type: 'Identifier', name: 'var' },
                                            arguments: [{ type: 'StringLiteral', value: 'input' }],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            },
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'CallExpression',
                    callee: { type: 'Identifier', name: 'letsmake' },
                    arguments: [
                        { type: 'StringLiteral', value: 'PromiseMaker' },
                        {
                            type: 'CallExpression',
                            callee: { type: 'Identifier', name: 'Arrowfunc' },
                            arguments: [
                                { type: 'StringLiteral', value: 'input' },
                                {
                                    type: 'CallExpression',
                                    callee: { type: 'Identifier', name: 'body' },
                                    arguments: [
                                        {
                                            type: 'CallExpression',
                                            callee: { type: 'Identifier', name: 'promise' },
                                            arguments: [
                                                { type: 'StringLiteral', value: 'resolve' },
                                                { type: 'StringLiteral', value: 'reject' },
                                                {
                                                    type: 'CallExpression',
                                                    callee: { type: 'Identifier', name: 'body' },
                                                    arguments: [
                                                        {
                                                            type: 'CallExpression',
                                                            callee: { type: 'Identifier', name: 'sendOut' },
                                                            arguments: [
                                                                {
                                                                    type: 'CallExpression',
                                                                    callee: { type: 'Identifier', name: 'var' },
                                                                    arguments: [
                                                                        { type: 'StringLiteral', value: 'input' },
                                                                    ],
                                                                },
                                                            ],
                                                        },
                                                        {
                                                            type: 'CallExpression',
                                                            callee: { type: 'Identifier', name: 'if' },
                                                            arguments: [
                                                                {
                                                                    type: 'CallExpression',
                                                                    callee: { type: 'Identifier', name: 'equal' },
                                                                    arguments: [
                                                                        {
                                                                            type: 'CallExpression',
                                                                            callee: { type: 'Identifier', name: 'var' },
                                                                            arguments: [
                                                                                {
                                                                                    type: 'StringLiteral',
                                                                                    value: 'input',
                                                                                },
                                                                            ],
                                                                        },
                                                                        { type: 'StringLiteral', value: "'hello'" },
                                                                    ],
                                                                },
                                                                {
                                                                    type: 'CallExpression',
                                                                    callee: { type: 'Identifier', name: 'body' },
                                                                    arguments: [
                                                                        {
                                                                            type: 'CallExpression',
                                                                            callee: {
                                                                                type: 'Identifier',
                                                                                name: 'call',
                                                                            },
                                                                            arguments: [
                                                                                {
                                                                                    type: 'StringLiteral',
                                                                                    value: 'reject',
                                                                                },
                                                                                {
                                                                                    type: 'CallExpression',
                                                                                    callee: {
                                                                                        type: 'Identifier',
                                                                                        name: 'string',
                                                                                    },
                                                                                    arguments: [
                                                                                        {
                                                                                            type: 'StringLiteral',
                                                                                            value: 'Not going to lie there is a errror',
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            ],
                                                                        },
                                                                    ],
                                                                },
                                                            ],
                                                        },
                                                        {
                                                            type: 'CallExpression',
                                                            callee: { type: 'Identifier', name: 'if' },
                                                            arguments: [
                                                                {
                                                                    type: 'CallExpression',
                                                                    callee: { type: 'Identifier', name: 'notequal' },
                                                                    arguments: [
                                                                        {
                                                                            type: 'CallExpression',
                                                                            callee: { type: 'Identifier', name: 'var' },
                                                                            arguments: [
                                                                                {
                                                                                    type: 'StringLiteral',
                                                                                    value: 'input',
                                                                                },
                                                                            ],
                                                                        },
                                                                        { type: 'StringLiteral', value: "'hello'" },
                                                                    ],
                                                                },
                                                                {
                                                                    type: 'CallExpression',
                                                                    callee: { type: 'Identifier', name: 'body' },
                                                                    arguments: [
                                                                        {
                                                                            type: 'CallExpression',
                                                                            callee: {
                                                                                type: 'Identifier',
                                                                                name: 'call',
                                                                            },
                                                                            arguments: [
                                                                                {
                                                                                    type: 'StringLiteral',
                                                                                    value: 'resolve',
                                                                                },
                                                                            ],
                                                                        },
                                                                    ],
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            },
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'CallExpression',
                    callee: { type: 'Identifier', name: 'letsmake' },
                    arguments: [
                        { type: 'StringLiteral', value: 'reponse' },
                        {
                            type: 'CallExpression',
                            callee: { type: 'Identifier', name: 'call' },
                            arguments: [
                                { type: 'StringLiteral', value: 'PromiseMaker' },
                                {
                                    type: 'CallExpression',
                                    callee: { type: 'Identifier', name: 'string' },
                                    arguments: [{ type: 'StringLiteral', value: 'hello' }],
                                },
                            ],
                        },
                    ],
                },
            },
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'CallExpression',
                    callee: { type: 'Identifier', name: 'error' },
                    arguments: [
                        {
                            type: 'CallExpression',
                            callee: { type: 'Identifier', name: 'Arrowfunc' },
                            arguments: [
                                { type: 'StringLiteral', value: 'input' },
                                {
                                    type: 'CallExpression',
                                    callee: { type: 'Identifier', name: 'body' },
                                    arguments: [
                                        {
                                            type: 'CallExpression',
                                            callee: { type: 'Identifier', name: 'sendOut' },
                                            arguments: [
                                                {
                                                    type: 'CallExpression',
                                                    callee: { type: 'Identifier', name: 'add' },
                                                    arguments: [
                                                        {
                                                            type: 'CallExpression',
                                                            callee: { type: 'Identifier', name: 'string' },
                                                            arguments: [
                                                                { type: 'StringLiteral', value: 'There was a error ' },
                                                            ],
                                                        },
                                                        {
                                                            type: 'CallExpression',
                                                            callee: { type: 'Identifier', name: 'var' },
                                                            arguments: [{ type: 'StringLiteral', value: 'input' }],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            },
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'CallExpression',
                    callee: { type: 'Identifier', name: 'call' },
                    arguments: [
                        { type: 'StringLiteral', value: 'PromiseMaker' },
                        {
                            type: 'CallExpression',
                            callee: { type: 'Identifier', name: 'string' },
                            arguments: [{ type: 'StringLiteral', value: 'anything else' }],
                        },
                    ],
                },
            },
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'CallExpression',
                    callee: { type: 'Identifier', name: 'error' },
                    arguments: [
                        {
                            type: 'CallExpression',
                            callee: { type: 'Identifier', name: 'Arrowfunc' },
                            arguments: [
                                { type: 'StringLiteral', value: 'input' },
                                {
                                    type: 'CallExpression',
                                    callee: { type: 'Identifier', name: 'body' },
                                    arguments: [
                                        {
                                            type: 'CallExpression',
                                            callee: { type: 'Identifier', name: 'sendOut' },
                                            arguments: [
                                                {
                                                    type: 'CallExpression',
                                                    callee: { type: 'Identifier', name: 'add' },
                                                    arguments: [
                                                        {
                                                            type: 'CallExpression',
                                                            callee: { type: 'Identifier', name: 'string' },
                                                            arguments: [
                                                                { type: 'StringLiteral', value: 'There was a error ' },
                                                            ],
                                                        },
                                                        {
                                                            type: 'CallExpression',
                                                            callee: { type: 'Identifier', name: 'var' },
                                                            arguments: [{ type: 'StringLiteral', value: 'input' }],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            },
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'CallExpression',
                    callee: { type: 'Identifier', name: 'after' },
                    arguments: [
                        {
                            type: 'CallExpression',
                            callee: { type: 'Identifier', name: 'Arrowfunc' },
                            arguments: [
                                { type: 'StringLiteral', value: 'input' },
                                {
                                    type: 'CallExpression',
                                    callee: { type: 'Identifier', name: 'body' },
                                    arguments: [
                                        {
                                            type: 'CallExpression',
                                            callee: { type: 'Identifier', name: 'sendOut' },
                                            arguments: [
                                                {
                                                    type: 'CallExpression',
                                                    callee: { type: 'Identifier', name: 'string' },
                                                    arguments: [
                                                        { type: 'StringLiteral', value: 'Promises successful' },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            },
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'CallExpression',
                    callee: { type: 'Identifier', name: 'call' },
                    arguments: [
                        { type: 'StringLiteral', value: 'PromiseMaker' },
                        {
                            type: 'CallExpression',
                            callee: { type: 'Identifier', name: 'string' },
                            arguments: [{ type: 'StringLiteral', value: 'hello' }],
                        },
                    ],
                },
            },
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'CallExpression',
                    callee: { type: 'Identifier', name: 'after' },
                    arguments: [
                        {
                            type: 'CallExpression',
                            callee: { type: 'Identifier', name: 'Arrowfunc' },
                            arguments: [
                                { type: 'StringLiteral', value: 'input' },
                                {
                                    type: 'CallExpression',
                                    callee: { type: 'Identifier', name: 'body' },
                                    arguments: [
                                        {
                                            type: 'CallExpression',
                                            callee: { type: 'Identifier', name: 'sendOut' },
                                            arguments: [
                                                {
                                                    type: 'CallExpression',
                                                    callee: { type: 'Identifier', name: 'string' },
                                                    arguments: [
                                                        { type: 'StringLiteral', value: 'Promises successful' },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            },
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'CallExpression',
                    callee: { type: 'Identifier', name: 'error' },
                    arguments: [
                        {
                            type: 'CallExpression',
                            callee: { type: 'Identifier', name: 'Arrowfunc' },
                            arguments: [
                                { type: 'StringLiteral', value: 'input' },
                                {
                                    type: 'CallExpression',
                                    callee: { type: 'Identifier', name: 'body' },
                                    arguments: [
                                        {
                                            type: 'CallExpression',
                                            callee: { type: 'Identifier', name: 'sendOut' },
                                            arguments: [
                                                {
                                                    type: 'CallExpression',
                                                    callee: { type: 'Identifier', name: 'add' },
                                                    arguments: [
                                                        {
                                                            type: 'CallExpression',
                                                            callee: { type: 'Identifier', name: 'string' },
                                                            arguments: [
                                                                { type: 'StringLiteral', value: 'There was a error ' },
                                                            ],
                                                        },
                                                        {
                                                            type: 'CallExpression',
                                                            callee: { type: 'Identifier', name: 'var' },
                                                            arguments: [{ type: 'StringLiteral', value: 'input' }],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            },
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'CallExpression',
                    callee: { type: 'Identifier', name: 'call' },
                    arguments: [
                        { type: 'StringLiteral', value: 'client.login' },
                        {
                            type: 'CallExpression',
                            callee: { type: 'Identifier', name: 'var' },
                            arguments: [{ type: 'StringLiteral', value: 'TOKEN' }],
                        },
                    ],
                },
            },
        ],
    });
});

test('Transformer, Web Harvscript', () => {
    expect(transformer(astTwoIn)).toStrictEqual({
        type: 'Program',
        body: [
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'CallExpression',
                    callee: { type: 'Identifier', name: 'functionGlobalCSSMainparent' },
                    arguments: [
                        {
                            type: 'CallExpression',
                            callee: { type: 'Identifier', name: 'body' },
                            arguments: [
                                {
                                    type: 'CallExpression',
                                    callee: { type: 'Identifier', name: 'render' },
                                    arguments: [
                                        {
                                            type: 'CallExpression',
                                            callee: { type: 'Identifier', name: 'varMainparent' },
                                            arguments: [],
                                        },
                                        {
                                            type: 'CallExpression',
                                            callee: { type: 'Identifier', name: 'style' },
                                            arguments: [
                                                {
                                                    type: 'CallExpression',
                                                    callee: { type: 'Identifier', name: 'string' },
                                                    arguments: [
                                                        {
                                                            type: 'StringLiteral',
                                                            value: '\n.nav-button{\nbackground-color:#4CAF50;/*Green*/\nborder:none;\ncolor:white;\npadding:15px32px;\ntext-align:center;\ntext-decoration:none;\nfont-size:16px;\ncursor:pointer;\noutline:none;\n}\n.nav-button:hover{\nbackground-color:#3e8e41;\n}\nbody{\nborder:0;\n}\n.hidden_tag{\ndisplay:none;\n}\n/*Yikesthishandlesthesmalltext*/\n.downabit{\ntransform:translate(0,100%);\n}\n',
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: 'CallExpression',
                                                    callee: { type: 'Identifier', name: 'empty' },
                                                    arguments: [],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            },
        ],
    });
});
