import { Router, Request, Response } from 'express';
import dotenv from 'dotenv';
import multer from 'multer';
import { fetchReviewsFromDatabase } from './ReviewService';
import { fetchReviewFromDatabase } from './ReviewService';
import { insertReviewInDatabase } from './ReviewService';
dotenv.config();

const router = Router();
const upload = multer();

router.get('/reviews', async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await fetchReviewsFromDatabase();
        res.status(200).json(response); 
    } catch (error) {
        console.error('Error in /movies route:', error);
        res.status(500).json({ message: 'Failed to fetch movies' }); 
    }
});



router.get('/reviews/:imdbID', async (req: Request, res: Response): Promise<void> => {
    try {
        const {imdbID} = req.params;
        const response = await fetchReviewFromDatabase(imdbID);
        res.status(200).json(response); 
    } catch (error) {
        console.error('Error in /movies route:', error);
        res.status(500).json({ message: 'Failed to fetch movies' }); 
    }
});


router.post('/reviews', upload.single('audio'), async (req: Request, res: Response): Promise<void> => {
    try {
        const { imdbID } = req.body; // Extract imdbID from request body
        const audio = req.file?.buffer; // Get the uploaded audio file as a buffer

        console.log('Received imdbID:', imdbID);
        console.log('Audio file size (bytes):', audio?.length);

        if (!imdbID || !audio) {
            res.status(400).json({ message: 'imdbID and audio are required' });
            return;
        }

        // Insert into database
        const postResponse = await insertReviewInDatabase({ imdbID, audio });
        res.status(200).json({ result: postResponse, success: true });
    } catch (error) {
        console.error('Error in /reviews route:', error);
        res.status(500).json({ message: 'Failed to insert review' });
    }
});




export default router;
