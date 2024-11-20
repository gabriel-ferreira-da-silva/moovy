"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToMovieFullEntity = exports.convertToMovieFullInterface = void 0;
const movie_entity_1 = require("../entities/movie.entity");
const rating_entity_1 = require("../entities/rating.entity");
const convertToMovieFullInterface = (response) => {
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
        Ratings: response.Ratings.map((rating) => ({
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
exports.convertToMovieFullInterface = convertToMovieFullInterface;
const convertToMovieFullEntity = (moviefull) => {
    const movieEntity = new movie_entity_1.Movie();
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
            const ratingEntity = new rating_entity_1.Rating();
            ratingEntity.imdbID = moviefull.imdbID;
            ratingEntity.source = rating.Source;
            ratingEntity.value = rating.Value;
            return ratingEntity;
        });
    }
    return movieEntity;
};
exports.convertToMovieFullEntity = convertToMovieFullEntity;
