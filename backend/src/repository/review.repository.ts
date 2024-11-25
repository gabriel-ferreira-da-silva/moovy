import { AppDataSource } from './datasource';
import { Review } from '../entities/review.entity';
import ReviewInterface from '../interfaces/Review.interface.'
import { convertToReviewEntity } from '../mapper/mapper';


export const insertReview = async (data: { imdbID: string; audio: Buffer }) => {
    const reviewRepository = AppDataSource.getRepository(Review);

    const review = new Review();
    review.imdbID = data.imdbID;
    review.audio = data.audio;

    return await reviewRepository.save(review); 
};
  

export async function getReviewsFromDatabase() {
    try {
        const reviewRepository = AppDataSource.getRepository(Review);
        const reviews = await reviewRepository.find();

        return { result: reviews };
    } catch (error) {
        return { message: "Failed to fetch movies from repository level", error: error };
    }
}


export async function getReviewFromDatabase(imdbID:string) {
    try {
        const reviewRepository = AppDataSource.getRepository(Review);
        const reviews = await reviewRepository.find({
            where:{imdbID:imdbID}
        });

        return { result: reviews };
    } catch (error) {
        return { message: "Failed to fetch movies from repository level", error: error };
    }
}