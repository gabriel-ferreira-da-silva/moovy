"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertMovie = insertMovie;
exports.getMoviesFromDatabase = getMoviesFromDatabase;
exports.deleteMovieFromDatabase = deleteMovieFromDatabase;
const datasource_1 = require("./datasource");
const movie_entity_1 = require("../entities/movie.entity");
const mapper_1 = require("../mapper/mapper");
function insertMovie(movieFullInterface) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let movie = (0, mapper_1.convertToMovieFullEntity)(movieFullInterface);
            const movieRepository = datasource_1.AppDataSource.getRepository(movie_entity_1.Movie);
            const result = yield movieRepository.save(movie);
            return { result: true };
        }
        catch (error) {
            return { result: false, error: error };
        }
    });
}
function getMoviesFromDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const movieRepository = datasource_1.AppDataSource.getRepository(movie_entity_1.Movie);
            const movies = yield movieRepository.find();
            return { result: movies };
        }
        catch (error) {
            return { message: "Failed to fetch movies from repository level", error: error };
        }
    });
}
function deleteMovieFromDatabase(imdbID) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const movieRepository = datasource_1.AppDataSource.getRepository(movie_entity_1.Movie);
            const result = yield movieRepository.delete({ imdbID });
            if (result.affected === 0) {
                return { message: `No movie found with imdbID: ${imdbID}`, result };
            }
            return { result: result, success: true };
        }
        catch (error) {
            return { message: "Failed to delete movie from repository level", error, success: false };
        }
    });
}
