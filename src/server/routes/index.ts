import express, { Express, Request, Response } from "express";

let router = express.Router();

router.get("/api/hello-world", (req: Request, res: Response) => {
  res.send({ hello: "world!" });
});

export default router;
