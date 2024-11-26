import { DataSource } from 'typeorm';
import { Movie } from '../modules/movies/movie.entity';
import { Rating } from '../modules/movies/rating.entity';
import { Review } from '../modules/reviews/review.entity'; 

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'moovyuser',
    password: 'moovyuser',
    database: 'moovydb',
    synchronize: true,
    logging: true, 
    entities: [Movie, Rating, Review],
    migrations: [],
    subscribers: [],
});
