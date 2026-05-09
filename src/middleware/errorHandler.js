const errorHandler = (err, req, res, next) => {
    console.log(err.stack);
    if (err.code === '23505') {
        res.status(409).json({ message: 'this email is already exists' });
    }


    const statusCode = err.statusCode || 500;
    const message = err.message || 'internal server error';
    res.status(statusCode).json({ message: message, error: process.env.NODE_ENV === 'development' ? err : {} });
}

module.exports = errorHandler;