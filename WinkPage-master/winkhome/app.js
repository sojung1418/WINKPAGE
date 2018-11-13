
var createError = require('http-errors');
var bodyParser = require('body-parser');
var fs = require('fs');
var url = require('url');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var schedule = require('node-schedule');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var galleryRouter = require('./routes/gallery');
var boardRouter = require('./routes/board');


var app = express();

app.use(express.static(path.join( __dirname, 'public')));
// view engine setup


app.set('views', path.join(__dirname, 'views'));  
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/gallery', galleryRouter);
app.use('/board', boardRouter);



app.listen(3000, function(){
  console.log("server on!");
 });



app.get('/', function(req, res, next) {
  res.render('index');
  
  });
  app.get('/intro', function(req, res, next) {
    res.render('intro');
    
    });
  
      app.get('/board', function(req, res, next) {
        res.render('board');
        
        });
        app.get('/boardwrite', function(req, res, next) {
          res.render('boardwrite');
          
          });
        
      app.get('/index', function(req, res, next) {
        res.render('index');
        
        });
        
      app.get('/gallery', function(req, res, next) {
        res.render('gallery');
        
        });
        app.get('/team', function(req, res, next) {
          res.render('team');
          
          });

     

var scheduler = schedule.scheduleJob('*/30 * * * *', function(){
  console.log("awakening");
  http.get("http://webinkookmin.herokuapp.com");
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render t;he error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
