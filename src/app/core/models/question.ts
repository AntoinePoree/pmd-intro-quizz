export interface IQuestion {
  id: number;
  title: string;
  responses: IResponse[];
}

export interface IResponse {
  id: number;
  response: string;
  scores: IScore[];
}

export interface IScore {
  nature: string;
  points: number;
}
