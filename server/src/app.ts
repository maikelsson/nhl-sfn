import e from "express";
import express from "express";
import * as Routes from "./routes";
import rateLimit from "express-rate-limit";

const app: express.Application = express();
app.use(express.json());
Routes.init(app);
export default app;
