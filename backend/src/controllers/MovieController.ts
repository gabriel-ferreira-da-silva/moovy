import { Router, Request, Response } from 'express';
import dotenv from 'dotenv';
import { fetchRandomMovies} from '../services/MovieService';

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

export default router;
