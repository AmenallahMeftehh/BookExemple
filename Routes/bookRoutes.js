var express = require ('express');

var routes = function(Book){
  var bookRouter = express.Router();

  bookRouter.route('/Books')
  // methode get pour recuperer les livres de la base Mongo books c'est la liste des livres
    .post(function(req,res){
      var book = new Book(req.body);
      book.save();
      res.status(201).send(book);

    })
    .get(function(req,res){
      var query = req.query;
      Book.find(query,function(err,books){
        if(err)
          res.status(500).send(err);
        else
          res.json(books)
      });
    });

    bookRouter.route('/Books/:bookId')
    // methode get pour recuperer les livres de la base Mongo books c'est la liste des livres
      .get(function(req,res){

        Book.findById(req.params.bookId,function(err,books){
          if(err)
            res.status(500).send(err);
          else
            res.json(books)
        });
      });
return bookRouter;

}


module.exports = routes;
