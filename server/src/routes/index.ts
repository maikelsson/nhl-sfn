import express, { Request, Response } from "express";
import rateLimit from "express-rate-limit";
import teamsRouter from "./teams";
import scoresRouter from "./scores";

export const init = (app: express.Application): void => {
  const router: express.Router = express.Router();

  const apiLimiter = rateLimit({
    windowMs: 3 * 1000,
    max: 3,
  });

  app.use(apiLimiter);

  app.use("/api/v1/scores", scoresRouter);
  app.use("/api/v1/teams", teamsRouter);

  app.get("/", async (req: Request, res: Response) => {
    res.send({
      status: "online",
      message: "Server online",
    });
  });

  app.use(router);
};
