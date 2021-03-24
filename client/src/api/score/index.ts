import axios from "axios";
import { ScoreResponse } from "./interface";
import { parseResponse } from "./parser";

export const findScoresByDate = async (date: string): Promise<ScoreResponse> => {
  try {
    console.log("api url, ", process.env.REACT_APP_API_URL);
    const response = await axios.get(process.env.REACT_APP_API_URL + `/scores/${date}`);
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
