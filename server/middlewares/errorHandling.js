module.exports = () => (err, req, res, next) => {
  console.log("hits global error middleware");

  let statusCode = 500;
  let message = "Internal Server Error";

  if (Array.isArray(err)) {
    message = err.join("\n");
  } else if (err.name === "ValidationError") {
    statusCode = 400;
    const errors = Object.values(err.errors).map((error) => error.message);
    message = errors.join("\n");
  } else if (typeof err.message === "string") {
    message = err.message;
  } else {
    return message;
  }

  res.status(statusCode).json({ message: message });
};
