import { AppDataSource } from './datasource';
import { Review } from '../entities/review.entity';
import ReviewInterface from '../interfaces/Review.interface.'
import { convertToReviewEntity } from '../mapper/mapper';

export async function insertReview(reviewInterface: ReviewInterface) {
    try{
        let review: Review = convertToReviewEntity(reviewInterface);
        const reviewRepository = AppDataSource.getRepository(Review);
        const result = await reviewRepository.save(review);
        return {result:true , response:result};
    }catch(error){
        return {result:false,  error:error}
    }    
}


export async function getReviewsFromDatabase() {
    try {
        const reviewRepository = AppDataSource.getRepository(Review);
        const reviews = await reviewRepository.find();

        return { result: reviews };
    } catch (error) {
        return { message: "Failed to fetch movies from repository level", error: error };
    }
}
