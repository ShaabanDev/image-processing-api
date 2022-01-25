import express, { Application, Response, Request, NextFunction } from 'express'
import { HttpError } from '../models/http-error'
import imageRouter from '../routes/image-routes'
const app: Application = express()

const port = 3000

app.use('/api/images', imageRouter)

app.use((error: HttpError, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(error)
  }
  res.status(error.status || 500)
  res.json({
    code: error.status || 400,
    message: error.message || 'An unknown error occurred!'
  })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

export default app
