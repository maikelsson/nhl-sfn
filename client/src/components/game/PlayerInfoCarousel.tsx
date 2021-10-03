import React from "react";
import { ArrowButton } from "../../utils/ArrowButton";
import ConnectedGameTopPlayers from "./GameTopPlayers";
import ConnectedTeamTopPlayers from "./TeamTopPlayers";

interface Props {
  homeLeaders?: any;
  awayLeaders?: any;
  homeAbbr?: string;
  awayAbbr?: string;
  points?: any;
}

export const PlayerInfoCarousel = (props: Props) => {
  const [pageId, setPageId] = React.useState<number>(0);

  const displayComponent = () => {
    if (pageId === 0) {
      return (
        <div className="flex justify-center flex-row p-1">
          <ConnectedTeamTopPlayers abbreviation={props.homeAbbr} leaders={props.homeLeaders} />
          <ConnectedTeamTopPlayers abbreviation={props.awayAbbr} leaders={props.awayLeaders} />
        </div>
      );
    } else {
      return (
        <div className="flex justify-center flex-row p-1">
          <ConnectedGameTopPlayers stats={props.points.home} />
          <ConnectedGameTopPlayers stats={props.points.away} />
        </div>
      );
    }
  };

  const prevComponent = () => {
    setPageId(1);
  };

  const nextComponent = () => {
    setPageId(0);
  };

  return (
    <div className="flex w-full justify-between items-center mx-2">
      <ArrowButton onClick={prevComponent} orientation="left" />
      <div className="w-full justify-center flex">{displayComponent()}</div>
      <ArrowButton onClick={nextComponent} orientation="right" />
    </div>
  );
};
