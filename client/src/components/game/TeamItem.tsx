import React from "react";
interface Props {
  team: any;
}

interface LeagueRecord {
  wins: number;
  losses: number;
  ot: number;
}

export const TeamItem = (props: Props) => {
  const displayLeagueRecord = (records: LeagueRecord) => {
    return (
      <div>
        <p className="text-gray-500 text-sm">
          {records.wins}-{records.losses}-{records.ot}
        </p>
      </div>
    );
  };

  if (!props.team) return;

  return (
    <div className="flex flex-col w-32 ">
      <div className="flex justify-center items-center ">
        <i className="w-16 ">
          <img
            src={
              process.env.REACT_APP_API_URL + `/images/${props.team.team.id}`
            }
            alt=""
          ></img>
        </i>
      </div>
      <div className="mt-2 text-center leading-none text-current flex flex-col justify-end box-border">
        <p className="font-normal">{props.team.team.teamName}</p>
        {displayLeagueRecord(props.team.leagueRecord)}
      </div>
    </div>
  );
};
