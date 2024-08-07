import dotenv from 'dotenv';

dotenv.config();

export const app = {
  port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
};
