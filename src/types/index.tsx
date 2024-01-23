export interface Tweet {
  id: string;
  text: string;
}

export interface TweetsApiResponse {
  data: Tweet[];
}
