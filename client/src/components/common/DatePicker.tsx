import React from "react";
import { dateToDisplayFormat } from "../../formatters/dateFormatter";
interface Props {
  date: Date;
  onChange: (e: React.MouseEvent<HTMLButtonElement>, amount: number) => void;
}

export const DatePicker = (props: Props) => {
  return (
    <div className="flex justify-evenly  w-full">
      <div>
        <button
          className="focus:outline-none hover:border-pink-700 border-b-2 border-transparent"
          onClick={(e) => props.onChange(e, -1)}
        >
          prev
        </button>
      </div>
      <div className="border-b-2 border-pink-700">{dateToDisplayFormat(props.date)}</div>
      <div>
        <button
          className="focus:outline-none hover:border-pink-700 border-b-2 border-transparent "
          onClick={(e) => props.onChange(e, 1)}
        >
          next
        </button>
      </div>
    </div>
  );
};
