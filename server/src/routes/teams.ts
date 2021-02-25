import { Router } from "express";
import { TeamController } from "../controllers";

const router: Router = Router();

router.get("/", TeamController.findAll);

export default router;
