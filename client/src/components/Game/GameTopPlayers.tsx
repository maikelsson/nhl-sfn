import React from "react";
import { connect } from "react-redux";
import { PlayerInfoCarousel } from "./PlayerInfoCarousel";

interface Props {
  selectedDate: Date;
  stats: any;
}

interface PlayerProps {
  name: string;
  goals: number;
  assists: number;
}

const GameTopPlayers = (props: Props) => {
  const [players, setPlayers] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  React.useEffect(() => {
    console.log("gameTopPlayers", props.stats.players);
    props.stats.players.forEach((p) => {
      let player: PlayerProps = {
        name: p.player.fullName,
        goals: p.stats.goals,
        assists: p.stats.assists,
      };

      let arr = players.concat({ player });
      setPlayers((old) => [...old, arr]);
    });
    console.log(players);
  }, []);

  return (
    <div className=" text-sm flex p-1 ml-1">
      <div className="text-gray-800 font-medium">{props.stats.team.abbreviation}</div>
      <div className="ml-2 w-auto font-medium text-gray-500">
        {players
          ? players.map((p, id) => (
              <div key={id}>
                <StatsPlayer props={p} />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

const StatsPlayer = (props: any) => {
  console.log(props, "statsPlayer");

  return (
    <div>
      {props.name}: {props.goals}+{props.assists}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedDate: state.selections.selectedDate,
  };
};

const ConnectedGameTopPlayers = connect(mapStateToProps)(GameTopPlayers);
export default ConnectedGameTopPlayers;
