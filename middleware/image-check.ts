import { Response, Request, NextFunction } from 'express';
import fs from 'fs';
const imageCheck = async (req: Request, res: Response, next: NextFunction) => {
  const fileName: string = req.query.filename as string;
  const width = req.query.width as unknown as number;
  const height = req.query.width as unknown as number;
  const dir = './assets/thumb';
  const imageExist = fs.existsSync(`${dir}/${fileName}-${width}x${height}.jpg`);

  if (fs.existsSync(dir) && imageExist) {
    throw new Error('Image Already Exist, Please try Another image.');
  } else {
    return next();
  }
};

export default imageCheck;
