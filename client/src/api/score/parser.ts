import {
  Games,
  Points,
  PointsTeam,
  TeamDetailsShort,
  ScoringPlays,
  PointsPlayer,
  ScoringPlayer,
  Stats,
} from "./interface";

export const parseResponse = async (games: Games[]): Promise<Games[]> => {
  let g: Games[] = games;
  console.log("games", games);
  for (let i = 0; i < games.length; i++) {
    const homeTeam: TeamDetailsShort = {
      id: games[i].teams.home.team.id,
      name: games[i].teams.home.team.name,
      abbreviation: games[i].teams.home.team.abbreviation,
    };
    const awayTeam: TeamDetailsShort = {
      id: games[i].teams.away.team.id,
      name: games[i].teams.away.team.name,
      abbreviation: games[i].teams.away.team.abbreviation,
    };
    const e = games[i].scoringPlays;
    games[i].points = getPointsFromGame(e, homeTeam, awayTeam);
  }
  return g;
};

const getPointsFromGame = (plays: ScoringPlays[], home: TeamDetailsShort, away: TeamDetailsShort): Points => {
  let homePoints: PointsTeam = { team: home, players: new Map<number, PointsPlayer>() };
  let awayPoints: PointsTeam = { team: away, players: new Map<number, PointsPlayer>() };
  plays.forEach((p) => {
    if (p.team.id === homePoints.team.id) {
      updatePlayers(homePoints.players, p.players);
    } else {
      updatePlayers(awayPoints.players, p.players);
    }
  });
  let res: Points = { away: awayPoints, home: homePoints };
  return res;
};

const updatePlayers = (current: Map<number, PointsPlayer>, payload: ScoringPlayer[]): void => {
  payload.forEach((p) => {
    if (!current.get(p.player.id)) {
      if (p.playerType === "Goalie") return;
      let sp: PointsPlayer = createPointsPlayer(p);
      current.set(p.player.id, sp);
    } else {
      let pointsPlayer: PointsPlayer = current.get(p.player.id);
      updatePointsPlayer(pointsPlayer, p);
    }
  });
};

const updatePointsPlayer = (pointsPlayer: PointsPlayer, scoringPlayer: ScoringPlayer): void => {
  if (scoringPlayer.playerType === "Scorer") {
    pointsPlayer.stats.goals++;
  } else if (scoringPlayer.playerType === "Assist") {
    pointsPlayer.stats.assists++;
  }
};

const createPointsPlayer = (p: ScoringPlayer): PointsPlayer => {
  let stats: Stats = { goals: 0, assists: 0 };

  if (p.playerType === "Scorer") {
    stats.goals++;
  } else if (p.playerType === "Assist") {
    stats.assists++;
  }

  let result: PointsPlayer = { player: p.player, stats: stats };
  return result;
};
