import axios from "axios";
import { ScoreResponse } from "./interface";
import { parseResponse } from "./parser";

export const findScoresByDate = async (date: string): Promise<ScoreResponse> => {
  try {
    const response = await axios.get(`https://gentle-tor-21418.herokuapp.com/api/v1/scores/${date}`);
    const result: any = await parseResponse(response.data.data);
    return { success: response.data.success, data: result };
  } catch (error) {
    const err = {
      success: false,
      data: error.message,
    };
    return err;
  }
};
