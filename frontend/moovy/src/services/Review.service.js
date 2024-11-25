import axios from "axios";
export const saveReviewInLibrary = async (data) => {
    try {
      
      const formData = new FormData();

      formData.append('imdbID', data.imdbID); 
      formData.append('audio', data.audio);
  
      const response = await axios.post('http://localhost:4000/api/reviews/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
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