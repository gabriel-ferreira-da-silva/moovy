import Movie from "./Movie.interface";
export default interface MovieResponse {
    Search: Array<Movie>;
    totalResults: string;
    Response: string;
    Error?: string;
}