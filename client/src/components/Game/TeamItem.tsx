import { promises } from "dns";
import React from "react";
import { LogoProvider } from "../../utils/LogoProvider";

interface IProps {
  id: number;
  name: string;
  record: string;
}

export const TeamItem = (props: IProps) => {
  return (
    <div className="flex flex-col">
      <div className="w-auto">
        <LogoProvider teamId={props.id} />
      </div>
      <p>{props.name}</p>
      <p>{props.record}</p>
    </div>
  );
};
