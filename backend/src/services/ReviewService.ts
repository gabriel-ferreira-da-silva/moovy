import { insertReview, getReviewsFromDatabase } from '../repository/review.repository';
import { convertToReviewInterface } from '../mapper/mapper';


export const fetchReviewsFromDatabase = async (): Promise<any> => {
    const response = await getReviewsFromDatabase();
    return response;
};


export const insertReviewInDatabase = async (reviewJSON:any): Promise<any>=>{
    const reviewInterface = convertToReviewInterface(reviewJSON);
    const data =  await insertReview(reviewInterface);
    return data;
}
