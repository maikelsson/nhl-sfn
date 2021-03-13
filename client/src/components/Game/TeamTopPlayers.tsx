import React from "react";
import { connect } from "react-redux";

interface Props {
  selectedNationality: string;
}

const TeamTopPlayers = (props: Props) => {
  React.useEffect(() => {
    console.log("teamtop");
  }, [props.selectedNationality]);
  return (
    <div className={`${props.selectedNationality === "FIN" ? "font-bold" : ""} w-3/6`}>{props.selectedNationality}</div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedNationality: state.selections.selectedNationality,
  };
};

const ConnectedTeamTopPlayers = connect(mapStateToProps)(TeamTopPlayers);
export default ConnectedTeamTopPlayers;
