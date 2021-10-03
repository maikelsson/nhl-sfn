import React from "react";
import { connect } from "react-redux";
import { PointsPlayer } from "../../api/score/interface";

interface Props {
  selectedNationality: string;
  selectedDate: Date;
  scores: any;
}

const NationTopPlayers = (props: Props) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [nationTop, setNationTop] = React.useState<PointsPlayer[]>();

  // can be improved?
  const parseNationPlayers = React.useCallback(async (): Promise<void> => {
    let arr: PointsPlayer[] = [];
    props.scores.forEach((game) => {
      game.points.away.players.forEach((p: PointsPlayer) => {
        if (p.player.nationality === props.selectedNationality) {
          arr.push(p);
        }
      });
      game.points.home.players.forEach((p: PointsPlayer) => {
        if (p.player.nationality === props.selectedNationality) {
          arr.push(p);
        }
      });
    });
    arr.sort(
      (p1: PointsPlayer, p2: PointsPlayer) => p2.stats.goals + p2.stats.assists - (p1.stats.goals + p1.stats.assists)
    );
    setNationTop(arr);
  }, [props.scores, props.selectedNationality]);

  React.useEffect(() => {
    setLoading(true);
    parseNationPlayers();
    setLoading(false);
  }, [props.selectedDate, props.scores, parseNationPlayers]);

  if (loading) {
    return (
      <div className="animate-pulse spinner flex container justify-center items-center content-center p-2 my-4 h-64">
        Loading...
      </div>
    );
  } else {
    return (
      <div className="flex w-full flex-wrap justify-center mb-2">
        {nationTop && nationTop.length > 0 ? (
          nationTop.slice(0, 10).map((p: PointsPlayer, c: number) => (
            <div className="min-w-2/4 p-2 m-2 bg-gray-100 shadow-lg md:rounded text-sm" key={p.player.id}>
              {c + 1}. {p.player.fullName} {p.stats.goals}+{p.stats.assists}
            </div>
          ))
        ) : (
          <div>No players for selected country :(</div>
        )}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    selectedNationality: state.selections.selectedNationality,
    selectedDate: state.selections.selectedDate,
  };
};

const ConnectedGameTopPlayers = connect(mapStateToProps)(NationTopPlayers);
export default ConnectedGameTopPlayers;
