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
exports.insertReview = insertReview;
exports.getReviewsFromDatabase = getReviewsFromDatabase;
const datasource_1 = require("./datasource");
const review_entity_1 = require("../entities/review.entity");
const mapper_1 = require("../mapper/mapper");
function insertReview(reviewInterface) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let review = (0, mapper_1.convertToReviewEntity)(reviewInterface);
            const reviewRepository = datasource_1.AppDataSource.getRepository(review_entity_1.Review);
            const result = yield reviewRepository.save(review);
            return { result: true, response: result };
        }
        catch (error) {
            return { result: false, error: error };
        }
    });
}
function getReviewsFromDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const reviewRepository = datasource_1.AppDataSource.getRepository(review_entity_1.Review);
            const reviews = yield reviewRepository.find();
            return { result: reviews };
        }
        catch (error) {
            return { message: "Failed to fetch movies from repository level", error: error };
        }
    });
}
