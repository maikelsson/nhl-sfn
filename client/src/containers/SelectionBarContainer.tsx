import React from "react";
import { DropDownOptions } from "../components/common/interfaces/interface";
import { connect } from "react-redux";
import ConnectedCustomDropDown from "../components/common/CustomDropDown";
import ConnectedDatePicker from "../components/common/DatePicker";

const options: DropDownOptions = {
  header: "Choose nationality",
  content: ["FIN", "SWE", "CAN", "USA", "CZE"],
};

interface Props {}

const Container = (props: Props) => {
  return (
    <div className="flex flex-col overflow-auto sm:w-5/6 w-full sm:my-2">
      <div className=" bg-gray-100 shadow rounded h-14 mb-3 flex items-center sm:justify-items-center">
        <ConnectedCustomDropDown options={options}></ConnectedCustomDropDown>
        <ConnectedDatePicker></ConnectedDatePicker>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedNationality: state.selections.selectedNationality,
  };
};

const SelectionBarContainer = connect(mapStateToProps)(Container);
export default SelectionBarContainer;
