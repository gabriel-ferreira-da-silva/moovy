import { AppDataSource } from './datasource';
import { Movie } from '../entities/movie.entity';

async function insertMovie() {

    const movie = new Movie();
    movie.imdbID = 'tt1234567';
    movie.title = 'Inception';
    movie.year = '2010';
    movie.rated = 'PG-13';
    movie.released = '2010-07-16';
    movie.runtime = '148 min';
    movie.genre = 'Action, Adventure, Sci-Fi';
    movie.director = 'Christopher Nolan';
    movie.writer = 'Christopher Nolan';
    movie.actors = 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page';
    movie.plot = 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.';
    movie.language = 'English, Japanese, French';
    movie.country = 'USA, UK';
    movie.awards = 'Won 4 Oscars. Another 152 wins & 204 nominations.';
    movie.poster = 'http://example.com/poster.jpg';
    movie.metascore = '74';
    movie.imdbRating = '8.8';
    movie.imdbVotes = '2,000,000';
    movie.type = 'movie';
    movie.dvd = '2010-12-07';
    movie.boxOffice = '$829,895,144';
    movie.production = 'Syncopy, Warner Bros. Pictures';
    movie.website = 'http://www.inceptionmovie.com/';
    movie.response = 'True';
    movie.error = '';

    const movieRepository = AppDataSource.getRepository(Movie);
    await movieRepository.save(movie);

    console.log('Movie saved successfully');
}

insertMovie().catch((err) => console.log(err));
