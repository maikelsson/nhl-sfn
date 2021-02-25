export interface IScoreService {
  findOne(date: string): Promise<any>;
}
