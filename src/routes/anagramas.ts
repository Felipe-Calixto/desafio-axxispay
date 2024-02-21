import express, { Response, Request } from "express";
const router = express.Router();
import anagramasService from "../services/anagramasService"

export interface IInfos {
    str: string;
}

router.post("/", (req: Request, res: Response) => {

    const infos: IInfos[] = req.body;

    if (!infos) {
        return res.sendStatus(400)
    }

    anagramasService.createAnagramas(infos).then((response: any) => {
        console.log(response)
        if(response.statusCode == 401) {
            res.status(401).json({message: response.message});
        } else if (response.statusCode == 500) {
            res.sendStatus(500);
        } else {
            res.status(200).json(response.json)
        }

    })

})

export default router;