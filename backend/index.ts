import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.get('/', (request: Request, response: Response) => {
  response.status(200).send('Hello Typescript Express');
});

app.listen(PORT, () => {
  console.log('Server running at POST: ', PORT);
}).on('error', (error) => {
  throw new Error(error.message);
});