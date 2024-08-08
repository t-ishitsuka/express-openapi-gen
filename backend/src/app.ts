import compression from 'compression';
import express, { urlencoded, json } from 'express';

import { RequestLogger } from '@/http/middlewares/logger';
import { AddTimestamp } from '@/http/middlewares/time';
import { RegisterRoutes } from '@/routes/routes';
import { RegisterSpecRoutes } from '@/routes/spec';

export const app = express();

app.use(
  urlencoded({
    extended: true,
  }),
);
app.use(json());

// TODO request class
// TODO save
// TODO validation
// TODO jwt auth
// TODO
// TODO
// TODO
// TODO
// TODO
// TODO
// TODO
// TODO

app.use(compression());

app.use(RequestLogger);
app.use(AddTimestamp);

RegisterSpecRoutes(app);
RegisterRoutes(app);
