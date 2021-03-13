import React from "react";
import { connect } from "react-redux";

interface Props {
  selectedDate: Date;
}

const GameTopPlayers = (props: Props) => {
  return <div>{props.selectedDate}</div>;
};

const mapStateToProps = (state) => {
  return {
    selectedDate: state.selections.selectedDate,
  };
};

const ConnectedGameTopPlayers = connect(mapStateToProps)(GameTopPlayers);
export default ConnectedGameTopPlayers;
