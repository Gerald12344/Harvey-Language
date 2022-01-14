import { codeGenerator } from '../compiler/codeGenerators';
import { parser } from '../compiler/Parse';
import { tokenizer } from '../compiler/Tokeniser';
import { transformer } from '../compiler/Transformer';

export function CompiledOtherFiles(input: string) {
    let tokens = tokenizer(input);
    let ast = parser(tokens);
    let newAst = transformer(ast);
    let output = codeGenerator(newAst);
    return output;
}
