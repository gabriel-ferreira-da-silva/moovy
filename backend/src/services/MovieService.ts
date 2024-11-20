import axios from 'axios';
import { randomStringGenerator } from '../utils/commom-utils';
import MovieResponse from '../interfaces/MovieResponse.interface';
import MovieFull from '../interfaces/Movie.full.interface';

export const fetchMovieByImdbID =  async (imdbID:string): Promise< MovieFull | null> =>{
    const apiKey = process.env.OMDB_API_KEY;
    
    if (!apiKey) {
        throw new Error("api key is not set in the environment variables.");
    }

    try {
        const apiResponse = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}&plot=full`);
        
        if (apiResponse.data.Response === "False") {
            console.error(`OMDb API Error: ${apiResponse.data.Error} (IMDb ID: ${imdbID})`);
            return null;
        }

        const data: MovieFull = apiResponse.data;
        return data;
    } catch (error) {
        console.error(`API Request Failed: ${error}`);
        return null;
    }
}

export const fetchRandomMovies = async (): Promise<MovieResponse | null> => {
    const apiKey = process.env.OMDB_API_KEY;

    if (!apiKey) {
        throw new Error("api key is not set in the environment variables.");
    }

    let totalResults = 0;
    let response: MovieResponse | null = null;
    let randomString = "";
    let attempts = 0;

    while (totalResults < 10 && attempts < 10) { 
        randomString = randomStringGenerator();
        try {
            const apiResponse = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${randomString}&type=movie&page=1`);
            response = apiResponse.data;
            if (response && response.Response === "True") {
                totalResults = parseInt(response.totalResults, 10);
            } else {
                var error = response ? response.Error : "could not fetch http://www.omdbapi.com/?apikey=${apiKey}&s=${randomString}&type=movie&page=1";
                console.warn(`OMDb API Error: ${error}`);
            }
        } catch (error) {
            console.error(`API Request Failed: ${error}`);
        }
        attempts++;
    }

    if (totalResults < 10) {
        console.warn("Unable to find enough movies after 10 attempts.");
        return null;
    }

    return response;
};