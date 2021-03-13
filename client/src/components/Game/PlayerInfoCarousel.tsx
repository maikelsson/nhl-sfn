import React from "react";
import { ArrowButton } from "../../utils/ArrowButton";
import ConnectedGameTopPlayers from "./GameTopPlayers";
import ConnectedTeamTopPlayers from "./TeamTopPlayers";

interface Props {
  scoringPlays?: any;
  homeLeaders?: any;
  awayLeaders?: any;
}

export const PlayerInfoCarousel = (props: Props) => {
  const [pageId, setPageId] = React.useState<number>(0);

  const displayComponent = () => {
    console.log("DispCOmp");
    if (pageId === 0) {
      return <ConnectedTeamTopPlayers />;
    } else {
      return <ConnectedGameTopPlayers />;
    }
  };

  React.useEffect(() => {
    console.log(props.scoringPlays);
  }, []);

  const prevComponent = () => {
    console.log("prev");
  };

  const nextComponent = () => {
    console.log("next");
  };

  return (
    <div className="flex w-full justify-between items-center mx-2">
      <ArrowButton onClick={prevComponent} orientation="left" />
      <div className="flex justify-center flex-row p-1 w-full">{displayComponent}</div>
      <ArrowButton onClick={nextComponent} orientation="right" />
    </div>
  );
};
