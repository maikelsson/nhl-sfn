import { Request, Response } from "express";
import { ScoreService } from "./service";

export const findOne = async (req: Request, res: Response): Promise<void> => {
  try {
    const scores = await ScoreService.findOne(req.params.date);
    res.status(200).json({ success: true, data: scores });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
