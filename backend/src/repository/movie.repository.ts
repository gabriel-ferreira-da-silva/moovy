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


export async function getMoviesFromDatabase() {
    try {
        const movieRepository = AppDataSource.getRepository(Movie);
        const movies = await movieRepository.find();

        return { result: movies };
    } catch (error) {
        return { message: "Failed to fetch movies from repository level", error: error };
    }
}



export async function deleteMovieFromDatabase(imdbID: string) {
    try {
        const movieRepository = AppDataSource.getRepository(Movie);
        const result = await movieRepository.delete({ imdbID });

        if (result.affected === 0) {
            return { message: `No movie found with imdbID: ${imdbID}`, result };
        }

        return { message: `Movie with imdbID: ${imdbID} successfully deleted`, result };
    } catch (error) {
        return { message: "Failed to delete movie from repository level", error };
    }
}