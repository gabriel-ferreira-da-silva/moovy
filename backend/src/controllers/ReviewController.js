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
const ReviewService_1 = require("../services/ReviewService");
const ReviewService_2 = require("../services/ReviewService");
dotenv_1.default.config();
const router = (0, express_1.Router)();
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
router.post('/reviews', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const postResponse = yield (0, ReviewService_2.insertReviewInDatabase)(data);
        res.status(200).json({ result: postResponse, success: true });
    }
    catch (error) {
        console.error('Error in /movies route:', error);
        res.status(500).json({ message: 'Failed to fetch movies' });
    }
}));
exports.default = router;
