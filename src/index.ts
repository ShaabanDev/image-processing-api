import express from 'express';
import sharp from 'sharp';
import fs from 'fs';
import imageCheck from '../middleware/image-check';
const app = express();

const port = 3000;

app.get('/api/images', imageCheck, async (req, res) => {
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
});

app.listen(port);
