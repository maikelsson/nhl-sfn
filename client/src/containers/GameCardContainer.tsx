import React from "react";
import { connect } from "react-redux";
import { findScoresByDate } from "../api/score";
import { ScoreResponse } from "../api/score/interface";
import { GameCard } from "../components/game/GameCard";
import ConnectedNationTopPlayers from "../components/game/NationTopPlayers";
import { dateToQueryFormat } from "../formatters/dateFormatter";

interface Props {
  selectedDate: Date;
}

const Container = (props: Props) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [scores, setScores] = React.useState<any>(null);
  const [error, setError] = React.useState(null);

  const getScoresWithDate = React.useCallback(async (): Promise<void> => {
    console.log("Scores selected date changed");
    const response: ScoreResponse = await findScoresByDate(dateToQueryFormat(props.selectedDate));
    if (response.success) {
      console.log(response);
      setScores(response.data);
    } else {
      setError(response.data);
    }
  }, [props.selectedDate]);

  React.useEffect(() => {
    if (!props.selectedDate) return;
    setLoading(true);
    const timer = setTimeout(() => {
      getScoresWithDate();
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [getScoresWithDate, props.selectedDate]);

  if (loading || !scores) {
    return (
      <div className="flex flex-col overflow-auto sm:w-5/6 w-full my-48">
        <div className="flex hover:bg-pink-200 transition-all bg-gray-100 shadow-lg mb-3 md:rounded justify-center items-center h-48"></div>
        <div className="flex hover:bg-pink-200 transition-all bg-gray-100 shadow-lg mb-3 md:rounded justify-center items-center h-48"></div>
        <div className="flex hover:bg-pink-200 transition-all bg-gray-100 shadow-lg mb-3 md:rounded justify-center items-center h-48"></div>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-col overflow-auto sm:w-5/6 w-full">
      {scores || loading ? (
        <>
          <ConnectedNationTopPlayers scores={scores} />
          {scores.map((g, id) => (
            <GameCard key={id} game={g} />
          ))}
        </>
      ) : (
        <div>Loading...</div>
      )}
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
