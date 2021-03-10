import React from "react";
import { CustomDropDown } from "../common/CustomDropDown";
import { DatePicker } from "../common/DatePicker";
import { DropDownOptions } from "../common/interfaces/interface";

const options: DropDownOptions = {
  header: "Choose nationality",
  content: ["FIN", "SWE", "CAN", "USA", "CZE"],
};

interface Props {
  onDateChange: (newDate: Date) => void;
  date: Date;
}

const ScoresTopBarContainer = (props: Props) => {
  const handleDateChange = () => {
    console.log("dateChange");
    return props.onDateChange(new Date());
  };

  return (
    <div className=" w-3/4 bg-gray-100 shadow rounded h-14 mb-3 max-w-screen-lg flex items-center sm:justify-items-center">
      {/* <CustomDropDown options={options} onChange={handleNationalityChange} current={selectedNation} /> */}
      <DatePicker date={props.date} onChange={handleDateChange} />
    </div>
  );
};

export default ScoresTopBarContainer;
