import express, { urlencoded, json } from 'express';
import { RegisterRoutes } from "@/routes/routes";

export const app = express();

app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

RegisterRoutes(app);
