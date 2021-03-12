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
    <div className="flex bold items-center justify-between w-40 font-medium">
      <h2>{props.info.homeScore}</h2>
      <div className="flex flex-col">
        <h4 className="">{props.info.status}</h4>
        <h5 className="font-normal">{displayHours(props.info.startTime)}</h5>
      </div>
      <p>{props.info.awayScore}</p>
    </div>
  );
};
