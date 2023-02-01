import { Router } from "express";
import { calculateOperation } from "../controllers/calculator";

const router = Router();

/*  POST - Calculator  */
router.post('/', calculateOperation);

export { router }