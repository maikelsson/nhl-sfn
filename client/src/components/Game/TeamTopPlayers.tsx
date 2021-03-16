import React from "react";
import { connect } from "react-redux";

interface Props {
  selectedNationality: string;
  abbreviation: string;
  leaders: any[];
}

interface PlayerProps {
  name: string;
  category: string;
  value: string;
}

const TeamTopPlayers = (props: Props) => {
  React.useEffect(() => {
    console.log("teamtop");
  }, [props.selectedNationality]);
  return (
    <div className=" text-sm flex p-1 ml-1">
      <div className="text-gray-800 font-medium">{props.abbreviation}</div>
      <div className="ml-2 w-auto font-medium text-gray-500">
        <LeaderPlayer
          name={props.leaders[0].leaders[0].person.fullName}
          category={props.leaders[0].leaderCategory}
          value={props.leaders[0].leaders[0].value}
        />
        <LeaderPlayer
          name={props.leaders[1].leaders[0].person.fullName}
          category={props.leaders[1].leaderCategory}
          value={props.leaders[1].leaders[0].value}
        />
        <LeaderPlayer
          name={props.leaders[2].leaders[0].person.fullName}
          category={props.leaders[2].leaderCategory}
          value={props.leaders[2].leaders[0].value}
        />
      </div>
    </div>
  );
};

const LeaderPlayer = (props: PlayerProps) => {
  const formatFullName = (name: string): string => {
    let arr = name.split(" ");
    return arr.length > 2 ? `${arr[0][0]}.${arr[1]} ${arr[2]}` : `${arr[0][0]}.${arr[1]}`;
  };

  return (
    <div>
      {formatFullName(props.name)}: {props.value} {props.category}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedNationality: state.selections.selectedNationality,
  };
};

const ConnectedTeamTopPlayers = connect(mapStateToProps)(TeamTopPlayers);
export default ConnectedTeamTopPlayers;
