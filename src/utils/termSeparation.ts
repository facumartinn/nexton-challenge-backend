export const calcValueInsideTerm = (operation:string) => {
    const regExp = /\(([^)]+)\)/g;
    const matches = operation.match(regExp);
    if (matches) {
        for (var i = 0; i < matches.length; i++) {
            var str = matches[i];
            const op = eval(str.substring(1, str.length - 1));
            operation = operation.replace(str, op)
        }
        return operation;
    }
}