
class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const ErrorMiddlewares=(err, req, res, next)=>{
    err.message = err.message || "Internal server Error"
    err.statusCode = err.statusCode || 500;

    return res.status(err.statusCode).json({
        success:true,
        message:err.message
    });
};

module.exports = { ErrorMiddlewares, ErrorHandler };
