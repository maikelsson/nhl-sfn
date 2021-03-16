import { Games, Points, ScoreResponse, ScoringPlays } from "./interface";

export const parseResponse = async (games: Games[]): Promise<Games[]> => {
  let g: Games[] = games;
  console.log(games);

  const res: ScoreResponse = { success: true, data: g };
  for (let i = 0; i < games.length; i++) {
    const e = games[i].scoringPlays;
    games[i].points = getPointsFromGame(e);
    console.log(e, "we");
  }
  return g;
};

const getPointsFromGame = (plays: ScoringPlays): Points => {
  const res: Points = {};
  return res;
};
