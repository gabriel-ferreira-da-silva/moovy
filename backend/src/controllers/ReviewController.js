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
const multer_1 = __importDefault(require("multer"));
const ReviewService_1 = require("../services/ReviewService");
const ReviewService_2 = require("../services/ReviewService");
const ReviewService_3 = require("../services/ReviewService");
dotenv_1.default.config();
const router = (0, express_1.Router)();
const upload = (0, multer_1.default)();
router.get('/reviews', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, ReviewService_1.fetchReviewsFromDatabase)();
        res.status(200).json(response);
    }
    catch (error) {
        console.error('Error in /movies route:', error);
        res.status(500).json({ message: 'Failed to fetch movies' });
    }
}));
router.get('/reviews/:imdbID', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { imdbID } = req.params;
        const response = yield (0, ReviewService_2.fetchReviewFromDatabase)(imdbID);
        res.status(200).json(response);
    }
    catch (error) {
        console.error('Error in /movies route:', error);
        res.status(500).json({ message: 'Failed to fetch movies' });
    }
}));
router.post('/reviews', upload.single('audio'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { imdbID } = req.body; // Extract imdbID from request body
        const audio = (_a = req.file) === null || _a === void 0 ? void 0 : _a.buffer; // Get the uploaded audio file as a buffer
        console.log('Received imdbID:', imdbID);
        console.log('Audio file size (bytes):', audio === null || audio === void 0 ? void 0 : audio.length);
        if (!imdbID || !audio) {
            res.status(400).json({ message: 'imdbID and audio are required' });
            return;
        }
        // Insert into database
        const postResponse = yield (0, ReviewService_3.insertReviewInDatabase)({ imdbID, audio });
        res.status(200).json({ result: postResponse, success: true });
    }
    catch (error) {
        console.error('Error in /reviews route:', error);
        res.status(500).json({ message: 'Failed to insert review' });
    }
}));
exports.default = router;
