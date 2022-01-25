import { NextFunction, Request, Response } from 'express';
import resizeImage from '../../loaders/sharp-fun';
import { HttpError } from '../../models/http-error';

const resizeFun = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const fileName: string = req.query.filename as string;
  const width = req.query.width as unknown as number;
  const height = req.query.height as unknown as number;
  const validResizing: boolean = await resizeImage(fileName, width, height);
  if (!validResizing) {
    return next(
      new HttpError('something wrong occurred, please try again later', 500)
    );
  }
  res.status(200).sendFile(`${fileName}-${width}x${height}.jpg`, {
    root: 'assets/thumb/'
  });
};

export default resizeFun;
