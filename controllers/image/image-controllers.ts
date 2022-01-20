import {Request,Response,ErrorRequestHandler, NextFunction} from 'express';
import sharp from 'sharp';
import fs from 'fs';

const resizeFun = async (req: Request, res: Response, next:NextFunction) => {
  const fileName = req.query.filename;
  const width = req.query.width as unknown as number;
  const height = req.query.width as unknown as number;

  const dir = './assets/thumb';
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, {
      recursive: true
    });
  }

  await sharp(`assets/full/${fileName}.jpg`)
    .resize({ width: +width, height: +height })
    .toFile(`assets/thumb/${fileName}-${width}x${height}.jpg`);
  res.send('hello');
}

export default resizeFun;