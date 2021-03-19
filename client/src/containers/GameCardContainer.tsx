import React from "react";
import { connect } from "react-redux";
import { findScoresByDate } from "../api/score";
import { ScoreResponse } from "../api/score/interface";
import { GameCard } from "../components/game/GameCard";
import { dateToQueryFormat } from "../formatters/dateFormatter";

interface Props {
  selectedDate: Date;
}

const Container = (props: Props) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [scores, setScores] = React.useState<any>(null);
  const [error, setError] = React.useState(null);

  const getScoresWithDate = React.useCallback(async (): Promise<void> => {
    if (!props.selectedDate) return;
    setLoading(true);
    const response: ScoreResponse = await findScoresByDate(dateToQueryFormat(props.selectedDate));
    if (response.success) {
      console.log(response);
      setScores(response.data);
    } else {
      setError(response.data);
      return;
    }

    setLoading(false);
  }, [props.selectedDate]);

  React.useEffect(() => {
    if (!props.selectedDate) return;
    setLoading(true);
    getScoresWithDate();
    setLoading(false);
  }, [getScoresWithDate, props.selectedDate]);

  if (loading || !scores) {
    return <>Loading...</>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-col overflow-auto w-5/6 sm:w-full ">
      {scores ? scores.map((g, id) => <GameCard key={id} game={g} />) : <div>Loading</div>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedDate: state.selections.selectedDate,
  };
};

const GameCardContainer = connect(mapStateToProps)(Container);
export default GameCardContainer;
