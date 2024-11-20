import { DataSource } from 'typeorm';
import { Movie } from '../entities/movie.entity';
import { Rating } from '../entities/rating.entity';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'moovyuser',
    password: 'moovyuser',
    database: 'moovydb',
    synchronize: true, 
    logging: true,
    entities: [Movie, Rating], 
    migrations: [],
    subscribers: [],
});
