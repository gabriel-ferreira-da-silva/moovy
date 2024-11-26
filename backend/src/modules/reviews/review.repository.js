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
exports.insertReview = void 0;
exports.getReviewsFromDatabase = getReviewsFromDatabase;
exports.getReviewFromDatabase = getReviewFromDatabase;
const datasource_1 = require("../../repository/datasource");
const review_entity_1 = require("./review.entity");
const insertReview = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const reviewRepository = datasource_1.AppDataSource.getRepository(review_entity_1.Review);
    const review = new review_entity_1.Review();
    review.imdbID = data.imdbID;
    review.audio = data.audio;
    return yield reviewRepository.save(review);
});
exports.insertReview = insertReview;
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
function getReviewFromDatabase(imdbID) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const reviewRepository = datasource_1.AppDataSource.getRepository(review_entity_1.Review);
            const reviews = yield reviewRepository.find({
                where: { imdbID: imdbID }
            });
            return { result: reviews };
        }
        catch (error) {
            return { message: "Failed to fetch movies from repository level", error: error };
        }
    });
}
