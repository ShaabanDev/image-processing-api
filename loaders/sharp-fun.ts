import sharp from 'sharp'
import fs from 'fs'
const resizeImage = async (
  fileName: string,
  width: number,
  height: number
): Promise<boolean> => {
  const dir = './assets/thumb'
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, {
      recursive: true
    })
  }
  const newImagePath = `${dir}/${fileName}-${width}x${height}.jpg`
  await sharp(`assets/full/${fileName}.jpg`)
    .resize({ width, height, fit: 'cover' })
    .toFile(newImagePath)
  const imageExistOnThumb = fs.existsSync(newImagePath)
  return imageExistOnThumb
}

export default resizeImage
