import GameCardContainer from "../containers/GameCardContainer";
import SelectionBarContainer from "../containers/SelectionBarContainer";

export const Scores = () => {
  return (
    <div className="flex flex-col items-center justify-center  ">
      <SelectionBarContainer />
      <GameCardContainer />
    </div>
  );
};
