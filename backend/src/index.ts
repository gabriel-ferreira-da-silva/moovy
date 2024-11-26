import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import movieRouter from './modules/movies/MovieController'; 
import reviewRouter from './modules/reviews/ReviewController'; 
import 'reflect-metadata';  
import { AppDataSource } from './repository/datasource'; 

AppDataSource.initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
        console.log('Entities:', AppDataSource.entityMetadatas.map(e => e.name));
    })
    .catch((error) => {
        console.error('Error during Data Source initialization:', error);
    });


dotenv.config();

const app: Application = express();
const port: number = 4000;

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  })
);

app.use('/api', movieRouter);
app.use('/api', reviewRouter);

app.listen(port, (): void => {
  console.log(`Server running on port ${port}`);
});

export default app;
