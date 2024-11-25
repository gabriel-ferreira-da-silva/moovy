import { Router, Request, Response } from 'express';
import dotenv from 'dotenv';

import { fetchReviewsFromDatabase } from '../services/ReviewService';
import { insertReviewInDatabase } from '../services/ReviewService';
dotenv.config();

const router = Router();

router.get('/reviews', async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await fetchReviewsFromDatabase();
        res.status(200).json(response); 
    } catch (error) {
        console.error('Error in /movies route:', error);
        res.status(500).json({ message: 'Failed to fetch movies' }); 
    }
});



router.post('/reviews', async (req: Request, res: Response): Promise<void> => {
    try {
        const data = req.body;
        const postResponse = await insertReviewInDatabase(data);
        res.status(200).json({result:postResponse, success:true});
    } catch (error) {
        console.error('Error in /movies route:', error);
        res.status(500).json({ message: 'Failed to fetch movies' }); 
    }
});



export default router;
