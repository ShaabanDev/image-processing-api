import express, { Application } from 'express';
import imageRouter from '../routes/image-routes';

const app: Application = express();

const port: Number = 3000;

app.use(imageRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
