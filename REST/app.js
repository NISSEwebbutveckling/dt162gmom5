/*Dt162g, Moment5 projekt, Nils
nibo1005@student.miun.se
*/

//Requiring modules, m.m.
var createError = require('http-errors');
//Returnerar en funktionsreferens, anropas med express()
//Module som skapar instans av expressaplikation.
//Importerar expresspaket.
var express = require('express');
//CORS
const cors = require("cors");

// The path.resolve() method, resolves sequence of paths or path segments i en "absolute path".
var path = require('path');
// Module, cookie-parsing
var cookieParser = require('cookie-parser');
// Module, logging-request-details
var logger = require('morgan');

//Importera routes
var indexRouter = require('./routes/index');
var musicsRouter = require('./routes/musics');

//Execute express.
var app = express();

//////////
//Aktivera ev. denna vid global körning.
var corsOptions = {
    //origin: "http://localhost:3000"
};
/////////

// view, engine setup.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//App.use
//////CORS////
app.use(cors(corsOptions));
//////////////////
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Middlewares. Varje gång "går till" musics, så  körs berörd(a) routers.
app.use('/', indexRouter);
app.use('/musics', musicsRouter);


//Felhant.
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

//Error handler
app.use(function(err, req, res, next) {
    // Set locals, förser endast med errors vid utveckling.
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // Renderar felsidan
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
