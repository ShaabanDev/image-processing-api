import { Request, Response } from 'express';
import sharp from 'sharp';
import fs from 'fs';

const resizeFun = async (req: Request, res: Response) => {
  const fileName = req.query.filename;
  const width = req.query.width as unknown as number;
  const height = req.query.height as unknown as number;

  const dir = './assets/thumb';
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, {
      recursive: true
    });
  }
  console.log(width, height);
  await sharp(`assets/full/${fileName}.jpg`)
    .resize({ width, height, fit: 'cover' })
    .toFile(`assets/thumb/${fileName}-${width}x${height}.jpg`);

  res.status(200).sendFile(`${fileName}-${width}x${height}.jpg`, {
    root: 'assets/thumb/'
  });
};

export default resizeFun;
