import axios, { AxiosResponse } from "axios";
import { IScoreService } from "./interface";

export const ScoreService: IScoreService = {
  async findOne(date: string): Promise<any> {
    try {
      const response = await axios.get(
        `https://statsapi.web.nhl.com/api/v1/schedule?date=${date}&hydrate=team(leaders(categories=[points,goals,assists],gameTypes=[R])),scoringplays`
      );
      const games = await response.data.dates[0].games;
      return games;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
