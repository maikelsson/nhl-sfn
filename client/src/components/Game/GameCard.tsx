import React from "react";
import { TeamItem } from "../game/TeamItem";

interface Props {
  game: any;
}

export const GameCard = (props: Props) => {
  return (
    <div className="bg-gray-100 shadow-lg mb-3 md:rounded flex items-center" style={{ height: "182px" }}>
      <div className="flex justify-content-center w-full">
        <TeamItem team={props.game.teams.home} />
        <div className="flex bold items-center justify-between w-40">
          <h2>{props.game.teams.home.score}</h2>
          <h4>{props.game.status.detailedState}</h4>
          <p>{props.game.teams.away.score}</p>
        </div>
        <TeamItem team={props.game.teams.away} />
      </div>
      <div className="hidden lg:hidden md:flex w-full bg-red-300">medium</div>
      <div className="hidden lg:flex w-full bg-blue-300">large</div>
    </div>
  );
};
