import express, { urlencoded, json } from 'express';

import { RequestLogger } from '@/http/middlewares/logger';
import { RegisterRoutes } from '@/routes/routes';
import { RegisterSpecRoutes } from '@/routes/spec';

export const app = express();

app.use(
  urlencoded({
    extended: true,
  }),
);
app.use(json());

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

app.use(RequestLogger);

RegisterSpecRoutes(app);
RegisterRoutes(app);
