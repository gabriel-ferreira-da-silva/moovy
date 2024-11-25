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
exports.insertReviewInDatabase = exports.fetchReviewsFromDatabase = void 0;
const review_repository_1 = require("../repository/review.repository");
const mapper_1 = require("../mapper/mapper");
const fetchReviewsFromDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, review_repository_1.getReviewsFromDatabase)();
    return response;
});
exports.fetchReviewsFromDatabase = fetchReviewsFromDatabase;
const insertReviewInDatabase = (reviewJSON) => __awaiter(void 0, void 0, void 0, function* () {
    const reviewInterface = (0, mapper_1.convertToReviewInterface)(reviewJSON);
    const data = yield (0, review_repository_1.insertReview)(reviewInterface);
    return data;
});
exports.insertReviewInDatabase = insertReviewInDatabase;
