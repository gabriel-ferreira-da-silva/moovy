import { Router, Request, Response } from 'express';
import dotenv from 'dotenv';
import { fetchRandomMovies, removeMovieFromDatabase} from '../services/MovieService';
import { fetchMovieByImdbID} from '../services/MovieService';
import { insertMovieInDatabase } from '../services/MovieService';
import { fetchMovieSearch } from '../services/MovieService';
import { fetchMoviesFromDatabase } from '../services/MovieService';

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


router.get('/movies/library', async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await fetchMoviesFromDatabase();
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
            res.status(500).json({message: 'failed to fetch movie', success:false})
            return;
        }

        try {
            const postResponse = await insertMovieInDatabase(response);
            res.status(200).json({result:postResponse, success:true});
        } catch (error){
            console.log("error");
            res.status(200).json({message: "error inserting in database" , error: error,success:false});
        }
    } catch (error) {
        console.error('Error in /movies route:', error);
        res.status(500).json({ message: 'Failed to fetch movies', success:false, error:error }); 
    }
});



router.delete('/movies/library/:imdbID', async (req: Request, res: Response): Promise<void> => {
    try {
        const { imdbID } = req.params;
        const response = await removeMovieFromDatabase(imdbID);
        res.status(200).json({result: response, success:true});
        
    } catch (error) {
        console.error('Error in /movies route:', error);
        res.status(500).json({ message: 'Failed to fetch movies' , success:false }); 
    }
});



export default router;
