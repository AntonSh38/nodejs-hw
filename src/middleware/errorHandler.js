import { HttpError } from 'http-errors';

export const errorHandler = (error, req, res, next) => {
  console.error('Error Middleware', error);

  if (error instanceof HttpError) {
    return res.status(error.status).json({
      message: error.message || error.name,
    });
  }

  const isProd = process.env.NODE_ENV === 'production';

  res
    .status(500)
    .json({ message: isProd ? 'Something went wrong!' : error.message });
};
