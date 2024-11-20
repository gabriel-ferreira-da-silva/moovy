import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import movieRouter from './controllers/MovieController'; // Ensure the file exports the router correctly

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

app.use(bodyParser.json());
app.use(express.json());

app.use('/api', movieRouter);

app.listen(port, (): void => {
  console.log(`Server running on port ${port}`);
});

export default app;
