import React from "react";
import { setPreviousDay, setNextDay } from "../../redux/reducers/scores/actions";
import { connect, useDispatch } from "react-redux";
import { dateToDisplayFormat } from "../../formatters/dateFormatter";
interface Props {
  selectedDate: Date;
}

const DatePicker = (props: Props) => {
  const dispatch = useDispatch();
  return (
    <>
      {props.selectedDate ? (
        <div className="flex justify-evenly w-full h-full">
          <div className="sm:w-4/6 w-full flex justify-evenly text-sm md:text-base">
            <div className="hover:border-pink-700 border-b-2 border-transparent">
              <button
                className="focus:outline-none h-full"
                onClick={(e) => dispatch(setPreviousDay(props.selectedDate))}
              >
                {dateToDisplayFormat(props.selectedDate, -1)}
              </button>
            </div>
            <div className="border-b-2 border-pink-700 ">
              <button className="focus:outline-none border-transparent h-full">
                {dateToDisplayFormat(props.selectedDate, 0)}
              </button>
            </div>
            <div className="hover:border-pink-700 border-b-2 border-transparent">
              <button
                className="focus:outline-none h-full border-transparent"
                onClick={(e) => dispatch(setNextDay(props.selectedDate))}
              >
                {dateToDisplayFormat(props.selectedDate, 1)}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedDate: state.selections.selectedDate,
  };
};

const ConnectedDatePicker = connect(mapStateToProps)(DatePicker);
export default ConnectedDatePicker;
