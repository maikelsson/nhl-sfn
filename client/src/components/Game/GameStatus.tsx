import React from "react";
import { GameStatusInfo } from "./interfaces/interface";

interface Props {
  info: GameStatusInfo;
}

export const GameStatus = (props: Props) => {
  return (
    <div className="flex bold items-center justify-between w-40">
      <h2>{props.info.homeScore}</h2>
      <h4>{props.info.status}</h4>
      <p>{props.info.awayScore}</p>
    </div>
  );
};
