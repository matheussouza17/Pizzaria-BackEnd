import { Request, Router, Response } from "express";

const router = Router();

router.get('/teste', (req: Request, res: Response) => {
    //throw new Error('Throw message of error!')
    return res.json({ok : true})
})

export { router }