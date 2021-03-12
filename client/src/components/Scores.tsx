import React from "react";
import { DatePicker } from "./common/DatePicker";
import { CustomDropDown } from "./common/CustomDropDown";
import { GameCard } from "./game/GameCard";
import axios from "axios";
import { findScoresByDate } from "../api/score";
import { dateToQueryFormat } from "../formatters/dateFormatter";
import { DropDownOptions } from "./common/interfaces/interface";
import { ScoreResponse } from "../api/score/interface";

const options: DropDownOptions = {
  header: "Choose nationality",
  content: ["FIN", "SWE", "CAN", "USA", "CZE"],
};

export const Scores = () => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [selectedDate, setSelectedDate] = React.useState<Date>(new Date());
  const [selectedNation, setSelectedNation] = React.useState<string>("");
  const [scores, setScores] = React.useState(null);

  const getScoresWithDate = React.useCallback(async () => {
    if (!selectedDate) return;
    setLoading(true);
    const response: ScoreResponse = await findScoresByDate(dateToQueryFormat(selectedDate));
    if (response.success) {
      setScores(response.data);
    } else {
      // handle errors!
      return;
    }
    setLoading(false);
  }, [selectedDate]);

  React.useEffect(() => {
    setLoading(true);
    console.log(selectedDate);
    getScoresWithDate();
    setLoading(false);
  }, [getScoresWithDate, selectedDate]);

  const handleDateChange = (e: React.MouseEvent<HTMLButtonElement>, value: number) => {
    e.preventDefault();
    let dateInMs: number = new Date(selectedDate).setDate(new Date(selectedDate).getDate() + value);
    console.log("date changed!", value);
    const newDate: Date = new Date(dateInMs);
    setSelectedDate(newDate);
  };

  const handleNationalityChange = (e: React.ChangeEvent<HTMLSelectElement>, value: string) => {
    e.preventDefault();
    setSelectedNation(value);
    console.log("nationality changed!", value);
  };

  if (loading || !scores) {
    return <>Loading...</>;
  }

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className=" w-3/4 bg-gray-100 shadow rounded h-14 mb-3 max-w-screen-lg flex items-center sm:justify-items-center">
        <CustomDropDown options={options} onChange={handleNationalityChange} current={selectedNation} />
        <DatePicker date={selectedDate} onChange={handleDateChange} />
      </div>
      <div className="flex flex-col overflow-auto w-3/4 max-w-screen-lg">
        {scores ? scores.map((g) => <GameCard game={g} />) : <div>Loading</div>}
      </div>
    </div>
  );
};
