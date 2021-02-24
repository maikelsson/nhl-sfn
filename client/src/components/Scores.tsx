import React from "react";
import { CustomDropDown } from "./Dropdown/CustomDropDown";
import { IDropDownOptions } from "./Dropdown/interface";

const options: IDropDownOptions = {
  header: "Choose nationality",
  content: ["FIN", "SWE", "CAN", "USA", "CZE"],
};

export const Scores = () => {
  return (
    <div className="flex-col flex-auto items-center justify-center bg-gray-200 py-10 px-20">
      <div className="bg-gray-100 shadow-lg h-14 mb-3 max-w-screen-lg">
        <CustomDropDown options={options} />
      </div>
      <div className="bg-gray-900 shadow">
        <h5>Scores</h5>
      </div>
    </div>
  );
};
