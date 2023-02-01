import { Request, Response } from "express";
import { parseAndCalculate, hasNotAllowedTermSeparator } from "../utils/calculations";

const calculateOperation = ({body}: Request, res: Response) => {
    let { operation } = body;
    const hasSyntaxError = hasNotAllowedTermSeparator(operation)
    if (!hasSyntaxError) {
        // Pass the operation and calculate the result.
        const result = parseAndCalculate(operation);
        return res.status(200).send({result: result});
    }
    return res.status(400).send({error: "Bad request", message: hasSyntaxError});
};

export { calculateOperation };