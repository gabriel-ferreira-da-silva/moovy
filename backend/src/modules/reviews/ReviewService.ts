import { insertReview, getReviewsFromDatabase, getReviewFromDatabase } from './review.repository';
import { convertToReviewInterface } from '../../mapper/mapper';


export const fetchReviewsFromDatabase = async (): Promise<any> => {
    const response = await getReviewsFromDatabase();
    return response;
};


export const insertReviewInDatabase = async (reviewJSON:any): Promise<any>=>{
    const reviewInterface = convertToReviewInterface(reviewJSON);
    const data =  await insertReview(reviewInterface);
    return data;
}

export const fetchReviewFromDatabase = async ( imdbID:string):Promise<any>=>{
    const data =  await getReviewFromDatabase(imdbID);
    return data;
}