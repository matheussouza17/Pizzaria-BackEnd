import { Router } from "express";
import {CreateUserController} from "./controllers/user/CreateUserController"
import {AuthUserController} from './controllers/user/AuthUserController'
import { DetailUserController } from './controllers/user/DetailUserController'

import {isAuthenticated} from './middlewares/isAuthenticated'

const router = Router();

// router.get('/teste', (req: Request, res: Response) => {
//     //throw new Error('Throw message of error!')
//     return res.json({ok : true})
// })

//ROTAS USER
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)

export { router } 