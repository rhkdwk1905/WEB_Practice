const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.Promise = global.Promise; // mongoDB 버전 4.11 이상부터 해주어야 에러 안남

const mongoDB = 'mongodb://127.0.0.1:27017/test' // 호스트:포트/DB명
const promise = mongoose.connect(mongoDB, {
  useMongoClient: true //mongoDB 버전 4.11 이상부터 해주어야 에러 안남
});

var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//여기에 데이터 라우터 추가
var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');

var app = express();
app.use(require('connect-history-api-fallback')());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//여기에 데이터 라우터 사용
app.use('/', indexRouter);
app.use('/api/', loginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
