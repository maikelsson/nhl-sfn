import React from "react";
import { GameStatusInfo } from "./interfaces/interface";

interface Props {
  info: GameStatusInfo;
}

export const GameStatus = (props: Props) => {
  const displayHours = (date: string): string => {
    const from: Date = new Date(date);
    let minutes: string = "";
    if (from.getMinutes() === 0) {
      minutes = "00";
    } else {
      minutes = from.getMinutes().toString();
    }

    const result: string = `${from.getHours() < 10 ? "0" : ""}${from.getHours()}:${minutes}`;

    return result;
  };

  return (
    <div className="flex items-center justify-between w-40 font-medium">
      <h1 className={`text-2xl ${props.info.homeScore > props.info.awayScore ? "" : "text-gray-400"}`}>
        {props.info.homeScore}
      </h1>
      <div className="flex flex-col justify-center items-center">
        <h4 className="">{props.info.status}</h4>
        {props.info.status !== "Final" ? (
          <h5 className="font-normal text-gray-400">{displayHours(props.info.startTime)}</h5>
        ) : (
          <></>
        )}
      </div>
      <h1 className={`text-2xl ${props.info.awayScore > props.info.homeScore ? "" : "text-gray-400"}`}>
        {props.info.awayScore}
      </h1>
    </div>
  );
};
