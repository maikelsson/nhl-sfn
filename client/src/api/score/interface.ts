export interface ScoreResponse {
  success: boolean;
  data: Games[];
}

export interface ErrorResponse {
  success: false;
  data: string;
}

export interface Games {
  gameDate: string;
  status: Status;
  teams: TeamPair;
  scoringPlays: ScoringPlays;
  points?: Points;
}

export interface ScoringPlays {
  players: ScoringPlayer[];
  result: ScoringPlayResult;
}

export interface Points {
  home?: PointsTeam;
  away?: PointsTeam;
}

interface PointsTeam {
  players: PointsPlayer[];
}

interface PointsPlayer {
  player: PersonShort;
  stats: Stats;
}

interface Stats {
  goals: number;
  assists: number;
  points: number;
}

interface Status {
  statusCode: string; // make this own type
  detailedState: string;
}
interface TeamPair {
  away: Team;
  home: Team;
}

interface Team {
  leagueRecord: LeagueRecord;
  score: number;
  team: TeamInfo;
}

interface LeagueRecord {
  wins: string;
  losses: string;
  ot: string;
  type: string;
}

interface TeamInfo {
  id: number;
  name: string;
  //link: string;
  //venue: Venue;
  abbreviation: string;
  teamName: string;
  //locationName: string;
  //firstYearOfPlay: string;
  //division: Division;
  //conference: Conference;
  //franchise: Franchise;
  teamLeaders: TeamLeader[];
  shortName: string;
  //officialSiteUrl: string;
  franchiseId: number;
  //active: boolean;
}

interface TeamLeader {
  leaderCategory: string;
  depth: string;
  playerStatus: string;
  season: string;
  //gameType: GameType;
  //limitMetadata: LimitMetadata;
  leaders: Leader[];
}

interface Leader {
  rank: number;
  value: string;
  team: { name: string };
  person: PersonShort;
  season: string;
}

interface ScoringPlayer {
  player: PersonShort;
  playerType: string;
  seasonTotal: number;
}

interface PersonShort {
  id: number;
  fullName: string;
  nationality?: string;
}

interface ScoringPlayResult {
  event: string;
  eventCode: string;
  description: string;
  team: { id: number; name: string };
}
