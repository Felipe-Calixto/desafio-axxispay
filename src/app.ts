import express from "express";
import router from "./router";
import bodyParser from "body-parser"

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.json({limit: '50mb'}));
app.use(router)

export default app;