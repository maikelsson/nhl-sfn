import axios from "axios";
import { ScoreResponse } from "./interface";

export const findScoresByDate = async (date: string): Promise<ScoreResponse> => {
  try {
    const response = await axios.get(`/api/v1/scores/${date}`);
    const result: ScoreResponse = await response.data;
    return result;
  } catch (error) {
    return error.message.json();
  }
};
