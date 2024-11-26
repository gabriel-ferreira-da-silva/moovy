import { AppDataSource } from '../../repository/datasource';
import { Movie } from './movie.entity';
import MovieFullInterface from './Movie.full.interface';
import { convertToMovieFullEntity } from '../../mapper/mapper';

const movieRepository = AppDataSource.getRepository(Movie);

export async function insertMovie(movieFullInterface: MovieFullInterface) {
    try{
        let movie: Movie = convertToMovieFullEntity(movieFullInterface);
        const result = await movieRepository.save(movie);
        return {result:true};
    }catch(error){
        return {result:false,  error:error}
    }    
}


export async function getMoviesFromDatabase() {
    try {
        const movies = await movieRepository.find();
        return { result: movies };
    } catch (error) {
        return { message: "Failed to fetch movies from repository level", error: error };
    }
}



export async function deleteMovieFromDatabase(imdbID: string) {
    try {
        const result = await movieRepository.delete({ imdbID });

        if (result.affected === 0) {
            return { message: `No movie found with imdbID: ${imdbID}`, result };
        }
        return {result:result, success:true};
    } catch (error) {
        return { message: "Failed to delete movie from repository level", error , success:false};
    }
}