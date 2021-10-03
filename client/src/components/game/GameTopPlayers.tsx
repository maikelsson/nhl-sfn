import React from "react";
import { connect } from "react-redux";
import { PointsPlayer } from "../../api/score/interface";
import { formatFullName } from "../../formatters/nameFormatter";

interface Props {
  selectedNationality: string;
  stats: any;
}

interface StatsPlayerProps {
  player: PointsPlayer;
}

const GameTopPlayers = (props: Props) => {
  const [showMore, setShowMore] = React.useState<boolean>(false);
  React.useEffect(() => {
    setShowMore(false);
  }, [props.stats]);

  const renderStatsPlayers = () => {
    let arr = props.stats.players
      .sort((p1: PointsPlayer, p2: PointsPlayer) => calculatePoints(p2) - calculatePoints(p1))
      .sort(
        (p1: PointsPlayer, p2: PointsPlayer) =>
          (p2.player.nationality === props.selectedNationality ? 1 : -1) -
          (p1.player.nationality === props.selectedNationality ? 1 : -1)
      );
    return (
      <>
        {arr.length > 0 ? (
          arr.slice(0, showMore ? arr.length : 4).map((p, id) => (
            <div className={`${p.player.nationality === props.selectedNationality ? "font-bold" : ""}`} key={id}>
              <StatsPlayer player={p} />
            </div>
          ))
        ) : (
          <div>none</div>
        )}
        {arr.length > 4 && !showMore ? (
          <button
            onClick={() => setShowMore(true)}
            className="text-xs text-gray-900 hover:text-pink-600 focus:outline-none"
          >
            more...
          </button>
        ) : null}
      </>
    );
  };

  const calculatePoints = (p: PointsPlayer): number => {
    const result = p.stats.assists + p.stats.goals;
    return result;
  };

  return (
    <div className=" text-sm flex p-1 ml-1">
      <div className="text-gray-800 font-medium flex self-center content-center">{props.stats.team.abbreviation}</div>
      <div className="ml-2 w-auto font-medium text-gray-500 flex flex-col self-center overflow-auto max-h-28">
        {renderStatsPlayers()}
      </div>
    </div>
  );
};

export const StatsPlayer = (props: StatsPlayerProps) => {
  return (
    <div>
      {formatFullName(props.player.player.fullName)}: {props.player.stats.goals}+{props.player.stats.assists}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedNationality: state.selections.selectedNationality,
  };
};

const ConnectedGameTopPlayers = connect(mapStateToProps)(GameTopPlayers);
export default ConnectedGameTopPlayers;
