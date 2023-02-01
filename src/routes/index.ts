import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName: string) => fileName.split(".").shift();

readdirSync(PATH_ROUTER).filter((path: string) => {
    const cleanName = cleanFileName(path);
    if (cleanName !== "index") {
        import(`./${cleanName}`)
        .then((routerModule) => router.use(`/${cleanName}`, routerModule.router));
    }
});

export { router };