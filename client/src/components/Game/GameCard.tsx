import React from "react";
import { Games } from "../../api/score/interface";
import { TeamItem } from "../game/TeamItem";
import { GameStatus } from "./GameStatus";
import { PlayerInfoCarousel } from "./PlayerInfoCarousel";

interface Props {
  game: Games;
}

export const GameCard = (props: Props) => {
  React.useEffect(() => {
    console.log(props.game.points);
  }, []);

  return (
    <div className="flex hover:bg-pink-200 transition-all bg-gray-100 shadow-lg mb-3 md:rounded justify-center items-center h-32 sm:h-40">
      <div className="flex justify-center items-center content-center w-full">
        <TeamItem team={props.game.teams.home} />
        <GameStatus
          info={{
            homeScore: props.game.teams.home.score,
            awayScore: props.game.teams.away.score,
            status: props.game.status.detailedState,
            startTime: props.game.gameDate,
          }}
        />
        <TeamItem team={props.game.teams.away} />
      </div>
      <div className="hidden lg:hidden md:flex w-full bg-red-300">medium</div>
      <div className="hidden lg:flex w-full">
        <PlayerInfoCarousel
          scoringPlays={props.game.scoringPlays}
          homeLeaders={props.game.teams.home.team.teamLeaders}
          awayLeaders={props.game.teams.away.team.teamLeaders}
          homeAbbr={props.game.teams.home.team.abbreviation}
          awayAbbr={props.game.teams.away.team.abbreviation}
        />
      </div>
    </div>
  );
};
