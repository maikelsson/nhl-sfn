import React from "react";
import { DatePicker } from "./common/DatePicker";
import { CustomDropDown } from "./common/CustomDropDown";
import { GameCard } from "./game/GameCard";
import axios from "axios";
import { findByDate } from "../api/score";
import { dateToQueryFormat } from "../formatters/dateFormatter";
import ScoresTopBarContainer from "./containers/ScoresTopBarContainer";

export const Scores = () => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [selectedDate, setSelectedDate] = React.useState<Date>(new Date());
  const [date, setDate] = React.useState<number>(25);
  const [selectedNation, setSelectedNation] = React.useState<string>("");
  const [scores, setScores] = React.useState(null);

  const getScoresWithDate = React.useCallback(async () => {
    if (!date) return;
    let response = await axios.get(`/api/v1/scores/${dateToQueryFormat(selectedDate)}`);
    console.log(response);
    //setScores(response);
  }, [date]);

  React.useEffect(() => {
    setLoading(true);
    console.log(selectedDate);

    //getScoresWithDate();
    setLoading(false);
  }, [getScoresWithDate]);

  const handleDateChange = (e: React.MouseEvent<HTMLButtonElement>, value: number) => {
    e.preventDefault();
    console.log("date changed!", value);
    setDate(date + value);
  };

  const handleNationalityChange = (e: React.ChangeEvent<HTMLSelectElement>, value: string) => {
    e.preventDefault();
    setSelectedNation(value);
    console.log("nationality changed!", value);
  };

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <div className="flex flex-col items-center justify-center ">
      <ScoresTopBarContainer date={selectedDate} onDateChange={(newDate) => setSelectedDate(newDate)} />
      <div className="flex flex-col overflow-auto w-3/4 max-w-screen-lg">
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
      </div>
    </div>
  );
};
