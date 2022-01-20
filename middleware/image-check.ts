import { Response, Request, NextFunction } from 'express';
import fs from 'fs';
const imageCheck = async (req: Request, res: Response, next: NextFunction) => {
  const fileName: string = req.query.filename as string;
  const width = req.query.width as unknown as number;
  const height = req.query.width as unknown as number;

  let dir = './assets/full';
  const imageExistOnFull = fs.existsSync(`${dir}/${fileName}.jpg`);
  if (imageExistOnFull) {
    dir = './assets/thumb';
    const imageExistOnThumb = fs.existsSync(
      `${dir}/${fileName}-${width}x${height}.jpg`
    );

    if (fs.existsSync(dir) && imageExistOnThumb) {
      throw new Error(
        'Image Already Exist on Thumbnails Folder, Please try Another image or Another Sizes.'
      );
    } else {
      return next();
    }
  } else {
    throw new Error('Image does not Exist on disk, Please try Another image.');
  }
};

export default imageCheck;
