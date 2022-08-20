import express, { Express, Request, Response } from "express";
import path from "path";
import logger from "morgan";

import router from "./routes";

const port = 8081;
const app: Express = express();
app.use(logger("common"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client")));
app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
