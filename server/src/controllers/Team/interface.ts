export interface ITeamService {
  findAll(): Promise<ITeamModel[]>;
}

export interface ITeamModel {
  id: number;
  name: string;
  link: string;
  venue: Venue;
  abbreviation: string;
  teamName: string;
  locationName: string;
  firstYearOfPlay: string;
  division: Conference;
  conference: Conference;
  franchise: Franchise;
  shortName: string;
  officialSiteUrl: string;
  franchiseId: number;
  active: boolean;
}

export interface Conference {
  id: number;
  name: string;
  link: string;
}

export interface Franchise {
  franchiseId: number;
  teamName: string;
  link: string;
}

export interface Venue {
  name: string;
  link: string;
  city: string;
  timeZone: TimeZone;
}

export interface TimeZone {
  id: string;
  offset: number;
  tz: string;
}
