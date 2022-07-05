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

const { ResponseService } = require('./services');
const { Error } = require('./config');
const { globalErrorHandler } = require('./middlewares');

const { DbConfig } = require('./config');

require('dotenv').config({ path: path.join(__dirname, '/config.env') });

const app = express();

// Express body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './node_modules_bootstrap/dist/css')));
app.use(express.static(path.join(__dirname, './config')));

// db configuration
const db = DbConfig.mongoURI;

// connect db
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB...');
  })
  .catch((err) => console.log(err));

// Use morgan to log any requests come to server
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// set security http headers
app.use(helmet());

// CORS for server and client communication
app.use(cors());

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

// Data sanitization against NoSql query injection
app.use(mongoSanitize()); // filter out the dollar signs protect from  query injection attack

// Data sanitization against XSS
app.use(xss()); // protect from molision code coming from html

// Use specific Router to handle each end point
// app.use('/api/v1/users', UserRouter);

// handling all (get,post,update,delete.....) unhandled routes
app.use('*', (req, res, next) => {
  next(ResponseService.newError(Error.UrlNotFound.errCode, Error.UrlNotFound.errMessage));
});

// error handling middleware
app.use(globalErrorHandler);

// running
const port = process.env.PORT || 3000;

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
