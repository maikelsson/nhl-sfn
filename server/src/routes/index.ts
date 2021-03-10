import express, { Request, Response } from "express";
import rateLimit from "express-rate-limit";
import teamsRouter from "./teams";
import scoresRouter from "./scores";
import { resolve } from "path";

export const init = (app: express.Application): void => {
  const router: express.Router = express.Router();

  const apiLimiter = rateLimit({
    windowMs: 3 * 1000,
    max: 3,
  });

  //app.use(apiLimiter);

  app.use("/api/v1/scores", scoresRouter);
  app.use("/api/v1/teams", teamsRouter);

  app.get("/", async (req: Request, res: Response) => {
    res.send({ message: "Server running!" });
  });

  app.get("/images/:id", async (req: Request, res: Response) => {
    try {
      const f = { path: resolve(__dirname, `../images/${req.params.id}_dark.svg`) };
      res.sendFile(f.path);
    } catch (error) {
      console.log(error);
    }
  });

  app.use(router);
};
