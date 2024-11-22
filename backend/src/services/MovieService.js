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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchRandomMovies = exports.insertMovieInDatabase = exports.fetchMovieSearch = exports.fetchMovieByImdbID = void 0;
const axios_1 = __importDefault(require("axios"));
const commom_utils_1 = require("../utils/commom-utils");
const movie_repository_1 = require("../repository/movie.repository");
const mapper_1 = require("../mapper/mapper");
const fetchMovieByImdbID = (imdbID) => __awaiter(void 0, void 0, void 0, function* () {
    const apiKey = process.env.OMDB_API_KEY;
    if (!apiKey) {
        throw new Error("api key is not set in the environment variables.");
    }
    try {
        const apiResponse = yield axios_1.default.get(`http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}&plot=full`);
        if (apiResponse.data.Response === "False") {
            console.error(`OMDb API Error: ${apiResponse.data.Error} (IMDb ID: ${imdbID})`);
            return null;
        }
        const data = apiResponse.data;
        return data;
    }
    catch (error) {
        console.error(`API Request Failed: ${error}`);
        return null;
    }
});
exports.fetchMovieByImdbID = fetchMovieByImdbID;
const fetchMovieSearch = (title) => __awaiter(void 0, void 0, void 0, function* () {
    const apiKey = process.env.OMDB_API_KEY;
    if (!apiKey)
        throw new Error("API key is not set in the environment variables.");
    const apiResponse = yield axios_1.default.get(`http://www.omdbapi.com/?s=${title}&apiKey=${apiKey}&page=1`);
    return apiResponse.data.Search ? apiResponse.data.Search : [];
});
exports.fetchMovieSearch = fetchMovieSearch;
const insertMovieInDatabase = (moviefullJson) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movieFullInterface = (0, mapper_1.convertToMovieFullInterface)(moviefullJson);
        const data = yield (0, movie_repository_1.insertMovie)(movieFullInterface);
        return data;
    }
    catch (error) {
        console.error(`API Request Failed: ${error}`);
        return { message: "error in insertMovieInDatabase service function", error: error };
    }
});
exports.insertMovieInDatabase = insertMovieInDatabase;
const fetchRandomMovies = () => __awaiter(void 0, void 0, void 0, function* () {
    const apiKey = process.env.OMDB_API_KEY;
    if (!apiKey) {
        throw new Error("api key is not set in the environment variables.");
    }
    let totalResults = 0;
    let response = null;
    let randomString = "";
    let attempts = 0;
    while (totalResults < 10 && attempts < 10) {
        randomString = (0, commom_utils_1.randomStringGenerator)();
        try {
            const apiResponse = yield axios_1.default.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${randomString}&type=movie&page=1`);
            response = apiResponse.data;
            if (response && response.Response === "True") {
                totalResults = parseInt(response.totalResults, 10);
            }
            else {
                var error = response ? response.Error : "could not fetch http://www.omdbapi.com/?apikey=${apiKey}&s=${randomString}&type=movie&page=1";
                console.warn(`OMDb API Error: ${error}`);
            }
        }
        catch (error) {
            console.error(`API Request Failed: ${error}`);
        }
        attempts++;
    }
    if (totalResults < 10) {
        console.warn("Unable to find enough movies after 10 attempts.");
        return null;
    }
    return response;
});
exports.fetchRandomMovies = fetchRandomMovies;
