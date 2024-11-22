import { Router, Request, Response } from 'express';
import dotenv from 'dotenv';
import { fetchRandomMovies} from '../services/MovieService';
import { fetchMovieByImdbID} from '../services/MovieService';
import { insertMovieInDatabase } from '../services/MovieService';
import { fetchMovieSearch } from '../services/MovieService';

dotenv.config();

const router = Router();

router.get('/movies', async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await fetchRandomMovies();
        res.status(200).json(response); 
    } catch (error) {
        console.error('Error in /movies route:', error);
        res.status(500).json({ message: 'Failed to fetch movies' }); 
    }
});

router.get('/movies/search/:title', async (req: Request, res: Response) => {
    const {title} = req.params;
    const response = await fetchMovieSearch(title);
    res.status(200).json(response);
});

router.get('/movies/imdbID/:imdbID', async (req: Request, res: Response): Promise<void> => {
    try {
        const { imdbID } = req.params;
        const response = await fetchMovieByImdbID(imdbID);
        res.status(200).json(response); 
    } catch (error) {
        console.error('Error in /movies route:', error);
        res.status(500).json({ message: 'Failed to fetch movies' }); 
    }
});


router.post('/movies/:imdbID', async (req: Request, res: Response): Promise<void> => {
    try {
        const { imdbID } = req.params;
        const response = await fetchMovieByImdbID(imdbID);
        
        if (response?.Error){
            res.status(500).json({message: 'failed to fetch movie'})
            return;
        }

        try {
            const postResponse = await insertMovieInDatabase(response);
            res.status(500).json(postResponse);
        } catch (error){
            console.log("error");
            res.status(500).json({message: "error inserting in database" , error: error});
        }
    } catch (error) {
        console.error('Error in /movies route:', error);
        res.status(500).json({ message: 'Failed to fetch movies' }); 
    }
});



export default router;
