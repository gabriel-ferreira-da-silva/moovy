import axios from 'axios';

export const fetchRandomMovies = async ()=>{
    try {
        const response = await axios.get(`http://localhost:4000/api/movies/`);
        return response.data.Search;
    } catch (error) {
        console.error('Error fetching avalilable movies for endpoint http://localhost:4000/api/movies/:', error);
        throw error;
    }
};


export const fetchMovieSearch = async (title)=>{
    try {
        const response = await axios.get(`http://localhost:4000/api/movies/search/${title}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching avalilable movies for endpoint http://localhost:4000/api/movies/:', error);
    }
};


export const saveMovieInLibrary = async (imdbID)=>{
    try {
        const response = await axios.post(`http://localhost:4000/api/movies/${imdbID}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching avalilable movies for endpoint http://localhost:4000/api/movies/:', error);
    }
};

export const deleteMovieFromLibrary = async (imdbID)=>{
    try {
        const response = await axios.delete(`http://localhost:4000/api/movies/library/${imdbID}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching avalilable movies for endpoint http://localhost:4000/api/movies/:', error);
    }
};


export const fetchMoviesFromLibrary = async ()=>{
    try {
        const response = await axios.get(`http://localhost:4000/api/movies/library`);
        return response.data;
    } catch (error) {
        console.error('Error fetching avalilable movies for endpoint http://localhost:4000/api/movies/:', error);
    }
};
