import express, { Express, Request, Response } from "express";
import path from "path";

const port = 8081;
const app: Express = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client")));

app.get("/api/hello-world", async (req: Request, res: Response) => {
  res.send({ hello: "world!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
