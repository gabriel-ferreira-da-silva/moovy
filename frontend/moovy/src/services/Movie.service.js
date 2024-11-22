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
