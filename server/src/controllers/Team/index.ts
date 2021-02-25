import { Request, Response } from "express";
import { ITeamModel } from "./interface";
import { TeamService } from "./service";

export const findAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const teams: ITeamModel[] = await TeamService.findAll();
    res.status(200).json({ success: true, data: teams });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
