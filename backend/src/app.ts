import express, { urlencoded, json } from 'express';
import { RegisterRoutes } from "@/routes/routes";

export const app = express();

app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

// TODO generate openapi yaml file
// TODO generate openapi viewer html file
// TODO add viewer openapi routing
// TODO check openapi spec
// TODO add response class
// TODO add middleware (show req, res timestamp)
// TODO add database
// TODO add prisma setting
// TODO gzip setting
// TODO hogehoge.....
// TODO 
// TODO 
// TODO 
// TODO 
// TODO 
// TODO 
// TODO 
// TODO 

RegisterRoutes(app);
