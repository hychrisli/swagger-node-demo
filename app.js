var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');


var index = require('./routes/index');
var swagger = require('./swagger');
var users = require('./controllers/users-ctrl');
var projs = require('./controllers/projs-ctrl');
var images = require('./controllers/images-ctrl');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload({preserveExtension: true}));
//cors
const corsOptions = {
  credentials: true,
  origin: true,
  methods: ['GET', 'PUT', 'POST', 'DELETE']
};

app.use(cors(corsOptions));

app.use('/', index);
app.use('/api/docs', swagger);
app.use('/api/users', users);
app.use('/api/projects', projs);
app.use('/api/images', images);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
