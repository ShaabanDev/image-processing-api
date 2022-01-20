import { Router } from 'express';
import resizeFun from '../controllers/image/image-controllers';
import imageCheck from '../middleware/image-check';

const imageRouter = Router();

imageRouter.get('/api/images', imageCheck, resizeFun);

export default imageRouter;
