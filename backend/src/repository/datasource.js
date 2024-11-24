"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const movie_entity_1 = require("../entities/movie.entity");
const rating_entity_1 = require("../entities/rating.entity");
const review_entity_1 = require("../entities/review.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'moovyuser',
    password: 'moovyuser',
    database: 'moovydb',
    synchronize: true,
    logging: true,
    entities: [movie_entity_1.Movie, rating_entity_1.Rating, review_entity_1.Review],
    migrations: [],
    subscribers: [],
});
