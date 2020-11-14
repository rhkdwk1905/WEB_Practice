// var createError = require('http-errors');
const express = require('express');
var path = require('path');
const bodyParser=require('body-parser');
//var logger = require('morgan');
const app = express();


const ip='0.0.0.0';
const port='8000';

app.listen(port,ip, () => {
  console.log('ip : '+ip+' port number : '+port);
  console.log('WEB_PROJECT');
	// api
app.use('/api',require('./api/api_bunch'));
  
});



// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'pug');

app.locals.pretty=true;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.use(logger('dev'));

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// //app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));


// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;