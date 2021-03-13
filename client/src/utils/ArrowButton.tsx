import React from "react";

interface Props {
  orientation: string;
  onClick?: (e: any) => void;
}

export const ArrowButton = (props: Props) => {
  return (
    <button
      className="m-0 bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-1 px-2 rounded focus:outline-none max-h-9 flex"
      onClick={props.onClick}
    >
      <span>{props.orientation.toLowerCase() === "left" ? <>&#x3c;</> : <>&#x3e;</>}</span>
    </button>
  );
};
