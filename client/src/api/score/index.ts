import axios from "axios";
import { ErrorResponse, ScoreResponse } from "./interface";

export const findScoresByDate = async (date: string): Promise<ScoreResponse> => {
  try {
    const response = await axios.get(`/api/v1/scores/${date}`);
    const result: ScoreResponse = await response.data;
    return result;
  } catch (error) {
    const err = {
      success: false,
      data: error.message,
    };
    return err;
  }
};
