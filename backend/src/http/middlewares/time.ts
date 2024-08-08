import { NextFunction, Request, Response } from 'express';

export const AddTimestamp = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // @ts-expect-error
  req.RequestTime = new Date().toISOString();

  next();

  const originalJson = res.json;

  res.json = function (body) {
    // @ts-expect-error
    body.requested_at = req.RequestTime;

    body.responsed_at = new Date().toISOString();

    return originalJson.call(this, body);
  };

  next();
};
