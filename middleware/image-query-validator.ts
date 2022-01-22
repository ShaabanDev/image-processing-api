import { check, query } from 'express-validator';

const queryValidator = () => [
  query('filename').exists().withMessage('image name is required.'),
  query('width')
    .exists()
    .withMessage('width is required.')
    .toInt()
    .isInt({ max: 1000 })
    .withMessage('max width is 1000.'),
  query('height')
    .exists()
    .withMessage('height is required.')
    .toInt()
    .isInt({ max: 1000 })
    .withMessage('max height is 1000.')
];

export default queryValidator;
