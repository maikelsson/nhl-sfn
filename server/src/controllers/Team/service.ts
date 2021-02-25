import { ITeamModel, ITeamService } from "./interface";
import axios from "axios";

export const TeamService: ITeamService = {
  async findAll(): Promise<ITeamModel[]> {
    try {
      const response = await axios.get("https://statsapi.web.nhl.com/api/v1/teams/");
      const teams: ITeamModel[] = await response.data.teams;
      return teams;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
