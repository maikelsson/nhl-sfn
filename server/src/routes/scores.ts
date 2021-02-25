import { Router } from "express";
import { ScoresController } from "../controllers";

const router: Router = Router();

router.get("/:date", ScoresController.findOne);

export default router;
