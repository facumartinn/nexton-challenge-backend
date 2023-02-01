import { Request, Response } from "express";
import { calcValueInsideTerm, parseAndCalculate } from "../utils/calculations";

const calculateOperation = ({body}: Request, res: Response) => {
    let { operation } = body;
    // Pass the operation and calculate the result.
    const result = parseAndCalculate(operation);
    res.status(200).send({result: result});
};

export { calculateOperation };