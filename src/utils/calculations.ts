export const calcValueInsideTerm = (operation:string) => {
    // Regular Expression that looks for matches that contains parentheses in the expression
    const regExp = /\(([^)]+)\)/g;
    const matches = operation.match(regExp);
    if (matches) {
        for (let i = 0; i < matches.length; i++) {
            let str = matches[i];
            // Remove the parentheses from the expression and calculate
            const op = parseAndCalculate(str.substring(1, str.length - 1)).toString();
            // Replace the match with the result of parseAndCalculate().
            operation = operation.replace(str, op)
        }
        return operation;
    }
    return operation;
}

// Parse the expression that matches the "+" operator and perform the operation.
const parsePlus = (operation:string) => {
    const operationSplitted = operation.split('+');
    const operationTerm = operationSplitted.map(noStr => parseMinus(noStr));
    const initialValue = 0.0;
    const result = operationTerm.reduce((acc, no) => acc + no, initialValue);
    return result;
}

// Parse the expression that matches the - operator and perform the operation.
const parseMinus = (operation:string) => {
    const operationSplitted = operation.split('-');
    const operationTerm = operationSplitted.map(noStr => parseDivision(noStr));
    const initialValue = operationTerm[0];
    const result = operationTerm.slice(1).reduce((acc, no) => acc - no, initialValue);
    return result;
}

// Parse the expression that matches the "/" operator and perform the operation.
const parseDivision = (operation:string) => {
    const operationSplitted = operation.split('/');
    const operationTerm = operationSplitted.map(noStr => parseMultiply(noStr));
    const initialValue = operationTerm[0];
    const result = operationTerm.slice(1).reduce((acc, no) => acc / no, initialValue);
    return result;
}

// Parse the expression that matches the "*" operator and perform the operation.
const parseMultiply = (operation:string) => {
	const operationSplitted = operation.split('*');
	const operationTerm = operationSplitted.map(noStr => +noStr);
	const initialValue = 1.0;
	const result = operationTerm.reduce((acc, no) => acc * no, initialValue);
	return result;
}

const parseAndCalculate = (operation:string) => {
    const finalOperation = calcValueInsideTerm(operation);
    return parsePlus(finalOperation);
}

// Check if the operation has invalid separators
const hasNotAllowedTermSeparator = (operation:string) => {
    if (operation.includes("{") || operation.includes("[")) {
        return {message: "Separator not allowed."}
    }
    return false;
};

export { parseAndCalculate, hasNotAllowedTermSeparator };
