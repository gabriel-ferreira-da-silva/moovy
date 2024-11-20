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
const express_1 = require("express");
const dotenv_1 = __importDefault(require("dotenv"));
const MovieService_1 = require("../services/MovieService");
const MovieService_2 = require("../services/MovieService");
const MovieService_3 = require("../services/MovieService");
dotenv_1.default.config();
const router = (0, express_1.Router)();
router.get('/movies', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, MovieService_1.fetchRandomMovies)();
        res.status(200).json(response);
    }
    catch (error) {
        console.error('Error in /movies route:', error);
        res.status(500).json({ message: 'Failed to fetch movies' });
    }
}));
router.get('/movies/imdbID/:imdbID', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { imdbID } = req.params;
        const response = yield (0, MovieService_2.fetchMovieByImdbID)(imdbID);
        res.status(200).json(response);
    }
    catch (error) {
        console.error('Error in /movies route:', error);
        res.status(500).json({ message: 'Failed to fetch movies' });
    }
}));
router.post('/movies/:imdbID', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { imdbID } = req.params;
        const response = yield (0, MovieService_2.fetchMovieByImdbID)(imdbID);
        if (response === null || response === void 0 ? void 0 : response.Error) {
            res.status(500).json({ message: 'failed to fetch movie' });
            return;
        }
        try {
            const postResponse = yield (0, MovieService_3.insertMovieInDatabase)(response);
            res.status(500).json(postResponse);
        }
        catch (error) {
            console.log("error");
            res.status(500).json({ message: "error inserting in database", error: error });
        }
    }
    catch (error) {
        console.error('Error in /movies route:', error);
        res.status(500).json({ message: 'Failed to fetch movies' });
    }
}));
exports.default = router;
