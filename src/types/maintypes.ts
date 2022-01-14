export interface mainNode {
    type: string;
    name?: string;
    params?: mainNode[];
    value?: string;
    body?: mainNode[];
    _context?: mainNode[];
}

export interface astRoot {
    type: string;
    body: mainNode[];
    _context?: mainNode[];
}

export interface expressionIn {
    type: string;
    callee?: {
        type?: string;
        name?: string | undefined;
    };
    arguments?: mainNode[];
    expression?: expressionIn;
}

export interface finalAST {
    type: string;
    body: mainNode[];
    expression?: expressionIn;
    callee?: {
        type?: string;
        name?: string | undefined;
    };
    arguments?: mainNode[];
    value?: string;
    name?: string;
}

export interface outputTozenised {
    type: string;
    value: string;
}
export interface visitors {
    [key: string]: {
        enter: CallableFunction;
        exit?: CallableFunction;
    };
}

export interface customPlugin {
    case: string;
    file: string;
}
