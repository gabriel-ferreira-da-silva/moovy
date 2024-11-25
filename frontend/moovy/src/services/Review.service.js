import axios from "axios";


export const saveReviewInLibrary = async (formData) => {
    try {
        const response = await axios.post(`http://localhost:4000/api/reviews`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data', // Important for file uploads
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error inserting review in library:', error);
        return null;
    }
};


export const fetchReviewsFromLibrary = async () => {
    try {
        const response = await axios.get('http://localhost:4000/api/reviews');
        return response.data; 
    } catch (error) {
        console.error('Error fetching reviews from library:', error);
        return null;
    }
};


export const fetchReviewFromLibrary = async (imdbID) => {
    try {
        const response = await axios.get('http://localhost:4000/api/reviews/'+imdbID);
        return response.data; 
    } catch (error) {
        console.error('Error fetching reviews from library:', error);
        return null;
    }
};