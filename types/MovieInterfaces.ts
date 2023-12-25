export interface movieResume {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface apiResponse {
  Search: movieResume[];
  totalResults: number;
  Response: boolean;
}
