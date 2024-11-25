import MovieResponseInterface from "../interfaces/MovieResponse.interface";
import MovieFullInterface from "../interfaces/Movie.full.interface";
import MovieInterface from "../interfaces/Movie.interface";
import { Movie } from "../entities/movie.entity";
import { Rating } from "../entities/rating.entity";
import ReviewInterface from "../interfaces/Review.interface.";
import { Review } from "../entities/review.entity";


export const convertToMovieFullInterface = (response: any): MovieFullInterface => {
    return {
        Title: response.Title,
        Year: response.Year,
        Rated: response.Rated,
        Released: response.Released,
        Runtime: response.Runtime,
        Genre: response.Genre,
        Director: response.Director,
        Writer: response.Writer,
        Actors: response.Actors,
        Plot: response.Plot,
        Language: response.Language,
        Country: response.Country,
        Awards: response.Awards,
        Poster: response.Poster,
        Ratings: response.Ratings.map((rating: any) => ({
            Source: rating.Source,
            Value: rating.Value
        })),
        Metascore: response.Metascore,
        imdbRating: response.imdbRating,
        imdbVotes: response.imdbVotes,
        imdbID: response.imdbID,
        Type: response.Type,
        DVD: response.DVD,
        BoxOffice: response.BoxOffice,
        Production: response.Production,
        Website: response.Website,
        Response: response.Response,
        Error: response.Error || undefined
    };
};


export const convertToMovieFullEntity = (moviefull: MovieFullInterface): Movie => {
    const movieEntity = new Movie();
    movieEntity.title = moviefull.Title;
    movieEntity.year = moviefull.Year;
    movieEntity.rated = moviefull.Rated;
    movieEntity.released = moviefull.Released;
    movieEntity.runtime = moviefull.Runtime;
    movieEntity.genre = moviefull.Genre;
    movieEntity.director = moviefull.Director;
    movieEntity.writer = moviefull.Writer;
    movieEntity.actors = moviefull.Actors;
    movieEntity.plot = moviefull.Plot;
    movieEntity.language = moviefull.Language;
    movieEntity.country = moviefull.Country;
    movieEntity.awards = moviefull.Awards;
    movieEntity.poster = moviefull.Poster;
    movieEntity.metascore = moviefull.Metascore;
    movieEntity.imdbRating = moviefull.imdbRating;
    movieEntity.imdbVotes = moviefull.imdbVotes;
    movieEntity.imdbID = moviefull.imdbID;
    movieEntity.type = moviefull.Type;
    movieEntity.dvd = moviefull.DVD;
    movieEntity.boxOffice = moviefull.BoxOffice;
    movieEntity.production = moviefull.Production;
    movieEntity.website = moviefull.Website;
    movieEntity.response = moviefull.Response;
    movieEntity.error = moviefull.Error ? moviefull.Error : "";

    
    if (moviefull.Ratings && Array.isArray(moviefull.Ratings)) {
        movieEntity.ratings = moviefull.Ratings.map(rating => {
            const ratingEntity = new Rating();
            ratingEntity.imdbID = moviefull.imdbID; 
            ratingEntity.source = rating.Source;
            ratingEntity.value = rating.Value;
            return ratingEntity;
        });
    }

    return movieEntity;
};


export const convertToReviewEntity = (review: ReviewInterface): Review => {
    const reviewEntity = new Review();
    reviewEntity.id = review.id;
    reviewEntity.imdbID = review.imdbID;
    reviewEntity.audio = review.audio;
    return reviewEntity;
};

export const convertToReviewInterface = (response: any): ReviewInterface => {
    return{
        id: response.id,
        imdbID: response.imdbID,
        audio: response.audio
    };
}


