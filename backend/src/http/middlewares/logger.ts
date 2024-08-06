import { NextFunction, Request, Response } from 'express';

export const RequestLogger = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  console.log(`[${new Date()}] ${req.method} ${req.url}`);

  next();
};
