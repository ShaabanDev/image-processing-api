import { Request, Response, NextFunction } from 'express';
import { query, validationResult } from 'express-validator';
import { HttpError } from '../models/http-error';
const checkValidationResult = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError(errors.array()[0].msg, 401));
  }
  return next();
};

export default checkValidationResult;
