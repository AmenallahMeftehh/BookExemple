// declaration d'express
var express = require('express');
// declaration de mongoose pour se connecter a mongodb
var mongoose = require('mongoose');
// declaration de bodyParser pour lire body et le parser en jason object
var  bodyParser = require('body-parser');
// connexion a mongodb avec la Base de données bookAPI
var db = mongoose.connect('mongodb://localhost/bookAPIUP');
// declaration de passport pour l'authentification
var passport = require('passport');
var hash = require('bcrypt-nodejs');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var localStrategy = require('passport-local' ).Strategy;
// Appel au model book,documentaire et user

var User = require('./models/user.js');
var Book = require ('./models/bookModel');
var Docum = require('./models/documModel');
// instantiation d'express
var app = express();
// declaration de port
var port = process.env.PORT || 8000;
// routage avec express
//requiring Routes
 routes = require('./Routes/userRoutes.js');
bookRouter = require('./Routes/bookRoutes')(Book);
documRouter = require('./Routes/documRoutes')(Docum);

// pour le logging on a utiliser morgan
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// initialisation et declaration de session a passport pour l'application d'express
app.use(passport.initialize());
app.use(passport.session());
// configure passport
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// routes
app.use('/api/user', routes);
app.use('/api/books',bookRouter);
app.use('/api/docums',documRouter);
app.use(express.static(__dirname));
app.get('/', function(req, res){
	res.sendFile(__dirname+'/index.html');
});

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(process.env.PORT || 8000, '127.0.0.1');
console.log('Server currently listening...');




app.listen(port, function(){
	console.log("gulp is running Server on port "+port);
});
