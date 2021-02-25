import React from "react";
import { DatePicker } from "./common/DatePicker";
import { CustomDropDown } from "./common/CustomDropDown";
import { IDropDownOptions } from "./common/interfaces/interface";
import { GameCard } from "./Game/GameCard";
import axios from "axios";

const options: IDropDownOptions = {
  header: "Choose nationality",
  content: ["FIN", "SWE", "CAN", "USA", "CZE"],
};

export const Scores = () => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [selectedDate, setSelectedDate] = React.useState<Date>(new Date());

  React.useEffect(() => {
    setLoading(true);
    const getScores = async (): Promise<void> => {
      const res = await axios.get(`/api/v1/scores/${"2020-02-23"}`);
      console.log(res.data);
    };
    getScores();
    setLoading(false);
  }, []);

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <div className="">
      <div className="bg-gray-100 shadow rounded h-14 mb-3 max-w-screen-lg flex items-center sm:justify-items-center">
        <CustomDropDown options={options} />
        <DatePicker value="55" onChange={() => console.log("test")} />
      </div>
      <div className="">
        <GameCard />
        <GameCard />
        <GameCard />
      </div>
    </div>
  );
};
