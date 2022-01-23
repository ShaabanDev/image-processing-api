import { Router } from 'express';
import resizeFun from '../controllers/image/image-controllers';
import imageCheck from '../middleware/image-check';
import queryValidator from '../middleware/image-query-validator';
import checkValidationResult from '../middleware/validation-result-check';

const imageRouter = Router();

imageRouter.get(
  '/resize',
  queryValidator(),
  checkValidationResult,
  imageCheck,
  resizeFun
);

export default imageRouter;
