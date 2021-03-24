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
      <div className="flex container p-2 my-4 bg-blue-300">
        {nationTop ? nationTop.map((p: PointsPlayer) => <div key={p.player.id}>{p.player.fullName}</div>) : null}
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
