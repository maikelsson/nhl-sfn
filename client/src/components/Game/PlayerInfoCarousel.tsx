import React from "react";
import { ArrowButton } from "../../utils/ArrowButton";
import ConnectedGameTopPlayers from "./GameTopPlayers";
import ConnectedTeamTopPlayers from "./TeamTopPlayers";

interface Props {
  scoringPlays?: any;
  homeLeaders?: any;
  awayLeaders?: any;
  homeAbbr?: string;
  awayAbbr?: string;
}

export const PlayerInfoCarousel = (props: Props) => {
  const [pageId, setPageId] = React.useState<number>(0);

  const displayComponent = () => {
    console.log("DispCOm");
    if (pageId === 0) {
      return (
        <>
          <ConnectedTeamTopPlayers abbreviation={props.homeAbbr} leaders={props.homeLeaders} />
          <ConnectedTeamTopPlayers abbreviation={props.awayAbbr} leaders={props.awayLeaders} />
        </>
      );
    } else {
      return <ConnectedGameTopPlayers />;
    }
  };

  React.useEffect(() => {
    //console.log(props.scoringPlays);
  }, []);

  const prevComponent = () => {
    console.log("prev");
    setPageId(1);
  };

  const nextComponent = () => {
    console.log("next");
    setPageId(0);
  };

  return (
    <div className="flex w-full justify-between items-center mx-2">
      <ArrowButton onClick={prevComponent} orientation="left" />
      <div className="flex justify-center flex-row p-1 w-full">{displayComponent()}</div>
      <ArrowButton onClick={nextComponent} orientation="right" />
    </div>
  );
};
