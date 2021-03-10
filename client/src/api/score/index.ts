import axios from "axios";

export const findByDate = async (date: string): Promise<void> => {
  try {
    const res = await axios.get(`/api/v1/scores/${date}`);
    console.log(res);
    return res.data;
  } catch (error) {
    return error.message.json();
  }
};
