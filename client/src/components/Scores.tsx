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
  const [date, setDate] = React.useState<number>(25);
  const [selectedNation, setSelectedNation] = React.useState<string>("");

  const getScores = async (): Promise<void> => {
    const res = await axios.get(`/api/v1/scores/${"2020-02-23"}`);
    console.log(res.data.data);
  };

  React.useEffect(() => {
    setLoading(true);
    getScores();
    setLoading(false);
  }, []);

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
    <div className="">
      <div className="bg-gray-100 shadow rounded h-14 mb-3 max-w-screen-lg flex items-center sm:justify-items-center">
        <CustomDropDown options={options} onChange={handleNationalityChange} current={selectedNation} />
        <DatePicker date={date} onChange={handleDateChange} />
      </div>
      <div className="overflow-auto">
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
