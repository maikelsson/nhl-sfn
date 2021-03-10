import React from "react";
import { TeamItem } from "./TeamItem";

interface Props {}

export const GameCard = (props: Props) => {
  return (
    <div
      className="bg-gray-100 shadow-lg mb-3 max-w-screen-lg md:rounded flex items-center"
      style={{ height: "182px" }}
    >
      <div className="flex md:justify-items-start sm:w-96 w-full">
        <TeamItem id={Math.floor(Math.random() * 30)} name={"Team "} record={"0-20-2"} />
        <div className="flex bold items-center justify-between w-40">
          <h2>0</h2>
          <h4>FINAL</h4>
          <p>5</p>
        </div>
        <TeamItem id={Math.floor(Math.random() * 30)} name={"Team "} record={"0-20-2"} />
      </div>
      <div className="hidden lg:hidden md:flex w-full bg-red-300">adasdasd</div>
      <div className="hidden lg:flex w-full bg-blue-300">adasdasd</div>
    </div>
  );
};
