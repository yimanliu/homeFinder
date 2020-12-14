const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const bodyParser = require('body-parser');
const Passport = require('passport');
const flash = require('express-flash');

const indexRouter = require('./routes/index');

const app = express();

// initialize the middleware of the app
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static(__dirname + '/front/build'));
app.use(bodyParser.json());
app.use(flash());
app.use(
  session({
    secret: 'key',
    resave: false,
    saveUninitialized: false,
  })
);
app.use(Passport.initialize());
app.use(Passport.session());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'front/build')));

app.use('/', indexRouter);

// create a way for the express to serve react home page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/front/build/index.html');
});

//listen to a specific port.
app.listen(process.env.PORT || 5000, () => {
  console.log(`Start listening for the port ${process.env.PORT}`);
});

module.exports = app;
