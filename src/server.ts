import express ,{ Request, Response, NextFunction} from "express";
import { router } from "./routes"

const app = express();

app.use(express.json()); //especificando qual tipo de formato será utilizado
app.use(router);

app.listen(3333,()=> console.log("Server online"))