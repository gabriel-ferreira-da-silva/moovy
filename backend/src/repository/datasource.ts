import { DataSource } from 'typeorm';
import { Movie } from '../entities/movie.entity';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'moovyuser',
    password: 'moovyuser',
    database: 'moovydb',
    entities: [Movie],
    synchronize: true, 
    logging: true
});
