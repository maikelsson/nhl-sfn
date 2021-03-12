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
    <div className="flex justify-evenly  w-full">
      <div>
        <button
          className="focus:outline-none hover:border-pink-700 border-b-2 border-transparent"
          onClick={(e) => dispatch(setPreviousDay(props.selectedDate))}
        >
          prev
        </button>
      </div>
      <div className="border-b-2 border-pink-700">
        {props.selectedDate ? dateToDisplayFormat(props.selectedDate) : <></>}
      </div>
      <div>
        <button
          className="focus:outline-none hover:border-pink-700 border-b-2 border-transparent "
          onClick={(e) => dispatch(setNextDay(props.selectedDate))}
        >
          next
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedDate: state.selections.selectedDate,
  };
};

const ConnectedDatePicker = connect(mapStateToProps)(DatePicker);
export default ConnectedDatePicker;
