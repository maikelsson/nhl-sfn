import React from "react";
import { TeamItem } from "./TeamItem";

interface Props {}

export const GameCard = (props: Props) => {
  return (
    <div
      className="bg-gray-100 shadow-lg sm:mb-1 max-w-screen-lg md:rounded flex items-center p-3"
      style={{ height: "120px" }}
    >
      <div className="flex sm:justify-items-center sm:w-3/5 w-full">
        <TeamItem id={Math.floor(Math.random() * 30)} name={"Team "} record={"0-20-2"} />
        Game status
        <TeamItem id={Math.floor(Math.random() * 30)} name={"Team "} record={"0-20-2"} />
      </div>
    </div>
  );
};
