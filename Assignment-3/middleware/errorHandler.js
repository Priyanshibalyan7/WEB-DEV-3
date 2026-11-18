const sendError = (res, statusCode, message, extra = {}) =>
  res.status(statusCode).json({
    success: false,
    message,
    ...extra,
  });

const notFound = (req, res) => {
  sendError(res, 404, `Route not found: ${req.method} ${req.originalUrl}`);
};

const errorHandler = (err, req, res, next) => {
  console.error('Error occurred:', err.message);

  let statusCode = res.statusCode === 200 ? 500 : res.statusCode || 500;
  let message = err.message || 'Internal Server Error';

  if (err.name === 'ValidationError') {
    statusCode = 400;
    const errors = Object.values(err.errors).map((e) => e.message);
    return sendError(res, statusCode, 'Validation Error', { errors });
  }

  if (err.code === 11000) {
    statusCode = 400;
    const duplicateField = Object.keys(err.keyValue)[0];
    message = `Duplicate value: '${err.keyValue[duplicateField]}' for field '${duplicateField}' already exists.`;
  }

  sendError(res, statusCode, message);
};

module.exports = { notFound, errorHandler };
