import React from "react";

interface IProps {
  value: string;
  onChange: (amount: number) => void;
}

export const DatePicker = (props: IProps) => {
  const [date, setDate] = React.useState<number>(25);

  React.useEffect(() => {
    console.log("value");
  }, [props.value]);

  const handleClick = (amt: number, e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setDate(date + amt);
  };

  return (
    <div className="flex justify-evenly sm:w-3/5 w-full">
      <div>
        <button
          className="focus:outline-none hover:border-pink-700 border-b-2 border-transparent"
          onClick={(e) => handleClick(-1, e)}
        >
          prev
        </button>
      </div>
      <div className="border-b-2 border-pink-700">{date}</div>
      <div>
        <button
          className="focus:outline-none hover:border-pink-700 border-b-2 border-transparent "
          onClick={(e) => handleClick(1, e)}
        >
          next
        </button>
      </div>
    </div>
  );
};
