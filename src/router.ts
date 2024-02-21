import express from "express"
const router = express.Router();

//Routes
import anagramasRouter from "./routes/anagramas"

router.use("/anagramas", anagramasRouter);

export default router