var express = require('express');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/bookAPI')
var app = express();
var port = process.env.PORT || 3000;

var bookRouter = express.Router();
bookRouter.route('/Books')
  .get(function(req,res){
    var responseJson = {hello:'thism my api'};
    res.json(responseJson);
  })
app.use('/api',bookRouter);


app.get('/',function(req,res){
  res.send('welcome to my API');
});
app.listen(port, function(){
	console.log("gulp is running Server on port "+port);
});
