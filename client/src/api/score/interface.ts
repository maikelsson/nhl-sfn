export interface ScoreResponse {
  success: boolean;
  data: any[];
}

export interface ErrorResponse {
  success: false;
  data: string;
}
