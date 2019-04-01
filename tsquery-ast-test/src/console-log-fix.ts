import { tsquery } from '@phenomnomnominal/tsquery';

export function consoleLogFix(src: string) {
    const ast = tsquery.ast(src);
    const matches = tsquery.query(
        ast,
        'MethodDeclaration CallExpression>PropertyAccessExpression[expression.name=console][name.name=log]'
    );
    console.log(matches.length);
    console.log(matches[0].getText());

    let result = src;

    for (const match of matches.reverse()) {
        result = result.substr(0, match.getStart()) +
        'this.myLog' +
        result.substr(match.getEnd());
    }

    return result;
}