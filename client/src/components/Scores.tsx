import SelectionBarContainer from "../containers/SelectionBarContainer";
import GameCardContainer from "../containers/GameCardContainer";

export const Scores = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <SelectionBarContainer />
      <GameCardContainer />
    </div>
  );
};
