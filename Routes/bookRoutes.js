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
      })
      .put(function(req, res){
          req.book.title = req.body.title;
          req.book.author = req.body.author;
          req.book.genre = req.body.genre;
          req.book.read = req.body.read;
          req.book.save(function(err){
            if(err)
              res.status(500).send(err);
            else{
                res.json(req.book);
              }
          });
      })
      .delete(function(req, res){
        req.book.remove(function(err){
          if(err)
            res.status(500).send(err);
          else
            res.status(204).send('Removed');
        });
      });
return bookRouter;

}


module.exports = routes;
