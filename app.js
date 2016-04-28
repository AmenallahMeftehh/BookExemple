// declaration d'express
var express = require('express');
// declaration de mongoose pour se connecter a mongodb
var mongoose = require('mongoose');
// declaration de bodyParser pour lire body et le parser en jason object
var  bodyParser = require('body-parser');
// connexion a mongodb avec la Base de données bookAPI
var db = mongoose.connect('mongodb://localhost/bookAPIUP');
// Appel au model book
var Book = require ('./models/bookModel');
// instantiation d'express
var app = express();
// declaration de port
var port = process.env.PORT || 3000;
// routage avec express
bookRouter = require('./Routes/bookRoutes')(Book);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



app.use('/api',bookRouter);
app.get('/',function(req,res){
  res.send('welcome to my API');
});
app.listen(port, function(){
	console.log("gulp is running Server on port "+port);
});
