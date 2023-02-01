import { Request, Response } from "express";
import { calcValueInsideTerm } from "../utils/termSeparation";

const calculateOperation = ({body}: Request, res: Response) => {
    let { operation } = body;
    let newOperation = calcValueInsideTerm(operation);
    if (newOperation) {
        const result = eval(newOperation);
        res.status(200).send({result: result});
    }
};

export { calculateOperation };