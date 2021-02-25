import axios from "axios";
import { IScoreService } from "./interface";

export const ScoreService: IScoreService = {
  async findOne(date: string): Promise<any> {
    try {
      const response = await axios.get(
        `https://statsapi.web.nhl.com/api/v1/schedule?date=${date}&hydrate=team(leaders(categories=[points,goals,assists],gameTypes=[R])),scoringplays`
      );
      return response.data.dates[0].games;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
