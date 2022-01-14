import { parser } from './Parse';

let tokenizerOut = [
    { type: 'paren', value: '<' },
    { type: 'name', value: 'functionGlobalCSSMainparent' },
    { type: 'paren', value: '<' },
    { type: 'name', value: 'body' },
    { type: 'paren', value: '<' },
    { type: 'name', value: 'render' },
    { type: 'paren', value: '<' },
    { type: 'name', value: 'varMainparent' },
    { type: 'paren', value: '>' },
    { type: 'paren', value: '<' },
    { type: 'name', value: 'style' },
    { type: 'paren', value: '<' },
    { type: 'name', value: 'string' },
    {
        type: 'string',
        value: '\n.nav-button{\nbackground-color:#4CAF50;/*Green*/\nborder:none;\ncolor:white;\npadding:15px32px;\ntext-align:center;\ntext-decoration:none;\nfont-size:16px;\ncursor:pointer;\noutline:none;\n}\n.nav-button:hover{\nbackground-color:#3e8e41;\n}\nbody{\nborder:0;\n}\n.hidden_tag{\ndisplay:none;\n}\n/*Yikesthishandlesthesmalltext*/\n.downabit{\ntransform:translate(0,100%);\n}\n',
    },
    { type: 'paren', value: '>' },
    { type: 'paren', value: '<' },
    { type: 'name', value: 'empty' },
    { type: 'paren', value: '>' },
    { type: 'paren', value: '>' },
    { type: 'paren', value: '>' },
    { type: 'paren', value: '>' },
    { type: 'paren', value: '>' },
];

let astOut = {
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

test('Tozeniser, Web Harvscript', () => {
    expect(parser(tokenizerOut)).toStrictEqual(astOut);
});
