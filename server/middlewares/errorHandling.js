// // handle for existing user with email or username
// const handleDuplicateError = (err, res) => {
//   const field = Object.keys(err.keyValue);
//   const code = 409;
//   const error = `An account with that ${field} already exists.`;
//
//   res.status(code).json({ messages: error, fields: field });
// };
//
// // handle field formatting, empty fields and mismatched passwords
// const handleValidationError = (err, res) => {
//   let errorMessages = Object.values(err.errors).map((el) => el.message);
//   let fields = Object.values(err.errors).map((el) => el.path);
//   const code = 400;
//
//   if (errors.length > 1) {
//     const formattedErrors = errorMessages.join("\n");
//     res.status(code).json({ messages: formattedErrors, fields: fields });
//   } else {
//     res.status(code).json({ messages: errors, fields: fields });
//   }
// };
//
// // custom messages
// const handleCustomError = (err, res) => {
//   const code = 400;
//   res.status(code).json({ messages: err });
// };
//
// module.exports = (error, req, res, next) => {
//   try {
//     console.log("congrats you hit the error middleware");
//     if (error.name === "ValidationError")
//       return error = handleValidationError(error, res);
//     if (error.code && error.code == 11000)
//       return error = handleDuplicateError(error, res);
//     if (typeof error.messages === "string")
//       return handleCustomError(error, res);
//   } catch (error) {
//     res.status(500).json("An unknown error occured.");
//   }
// };

module.exports = () => (err, req, res, next) => {
  console.log('err middlware');

//   let statusCode = 500;
//   let message = "Internal Server Error";
// 
//   if (Array.isArray(err)) {
//     message = err.join("\n");
//   } else if (err.name === "ValidationError") {
//     statusCode = 400;
//     const errors = Object.values(err).map((error) => error.message);
//     message = errors.join(" ");
//   } else if (typeof err.message === "string") {
//     message = err.message;
//   } else {
//     return message;
//   }
// 
//   res.status(statusCode).json({ message: message });
}