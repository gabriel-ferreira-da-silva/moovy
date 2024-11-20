import { AppDataSource } from './datasource';
import { Movie } from '../entities/movie.entity';
import MovieFullInterface from '../interfaces/Movie.full.interface';
import { convertToMovieFullEntity } from '../mapper/mapper';

export async function insertMovie(movieFullInterface: MovieFullInterface) {

    try{
        let movie: Movie = convertToMovieFullEntity(movieFullInterface);
        const movieRepository = AppDataSource.getRepository(Movie);
        const result = await movieRepository.save(movie);
        return {result:result};
    }catch(error){
        return {message:"failed to insertMovie in repository level" , error:error}
    }
    
}
