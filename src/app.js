// App module will handle all application logic from security to business logic
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const { Error } = require('./config');
const { globalErrorHandler } = require('./middlewares');
const { ResponseService } = require('./services');
const { AuthRouter, UserRouter, MobileRouter } = require('./routers');

const app = express();

// Express body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './node_modules_bootstrap/dist/css')));
app.use(express.static(path.join(__dirname, './config')));

// allow bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// db configuration

dotenv.config();
// connect db
mongoose.connect(process.env.DB_CONNECT, () => console.log('connected to the database'));
// Use morgan to log any requests come to server
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// set security http headers
app.use(helmet());

// CORS for server and client communication
app.use(
  cors({
    credentials: true,
    origin: '*',
  })
);

// set limit request from same API in timePeroid from same ip
// set this limit to API calls only
const limiter = rateLimit({
  max: 20, //   max number of limits
  windowMs: 5 * 60 * 1000, // 5 minutes
  message: ' Too many req from this IP , please Try  again in 5 minutes!',
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  skipSuccessfulRequests: true, // skip if the request is succesful
});

app.use('/api', limiter);

//  Body Parser  => reading data from body into req.body protect from scraping etc
// parses incoming requests with JSON payloads
// content-type: application/json
app.use(express.json({ limit: '10kb' }));

// Enable parsing cookies to read
app.use(cookieParser());

// Data sanitization against NoSql query injection
app.use(mongoSanitize()); // filter out the dollar signs protect from  query injection attack

// Data sanitization against XSS
app.use(xss()); // protect from molision code coming from html

// Use specific Router to handle each end point
// path of routes
app.use('/api/auth', AuthRouter);
app.use('/api/user', UserRouter);
app.use('/api/mobile', MobileRouter);

// handling all (get,post,update,delete.....) unhandled routes
app.use('*', (req, res, next) => {
  next(ResponseService.newError(Error.UrlNotFound.errCode, Error.UrlNotFound.errMessage));
});

// error handling middleware
app.use(globalErrorHandler);

// running
const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// handle Globaly the unhandle Rejection Error which is  outside the express
// e.g database connection
process.on('unhandledRejection', (error) => {
  // it uses unhandledRejection event
  // using unhandledRejection event
  console.log(' Unhandled Rejection => shutting down..... ');
  console.log(error.name, error.message);
  server.close(() => {
    process.exit(1); //  emidiatly exists all from all the requests sending OR pending
  });
});
