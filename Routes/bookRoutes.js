var express = require ('express');

var routes = function(Book){
  var bookRouter = express.Router();
  bookRouter.route('/')
    .post(function(req, res){
      var book = new Book(req.body);
      book.save();
      res.status(201).send(book);
    })
    .get(function(req, res){
      var query = {};
      if(req.query.id){
        query.id = req.query.id;
      }
      Book.find(query, function(err, books){
        if(err)
          res.status(500).send(err);
        else
          res.json(books);
      });
    });
  //definir un middleware pour ne pas répéter
  // Book.findById
  bookRouter.use('/:bookId', function(req,res,next){
      Book.findById(req.params.bookId, function(err,book){
        console.log(req.params.bookId);

        if(err)
          res.status(500).send(err);
        else if(book)
        {
          req.book = book;
          console.log(req.book);
          next();
        }
        else
        {
          res.status(404).send("no book found");
        }
      });
  });

  //definir le book router pour recuperer un seule livre à partir de la liste des livres
  bookRouter.route('/:id')
    .get(function(req, res){
        res.json(req.book);
    })
    .put(function(req, res){
        Book.id=req.params.id;
          Book.findOneAndUpdate({_id:Book.id}
            ,{

                $set: {
                    title: req.body.title
                    , author: req.body.author
                    , genre: req.body.genre
                    , read: req.body.read

            }

        },    function(err){
            if(err)
              res.status(500).send(err);
            else{
                res.json(req.book);
              }
          });
      })
    .patch(function(req, res){
        if(req.body._id)
          delete req.body._id;
        for(var p in req.body)
        {
          req.book[p] = req.body[p];
        }
        req.book.save(function(err){
          if(err)
            res.status(500).send(err);
          else{
            res.json(req.book);
          }
        });
    })

    .delete(function(req, res){
      Book.id=req.params.id;
      console.log(req.Book);
      Book.findOneAndRemove({_id:Book.id},function(err){
        if(err)
          res.status(500).send(err);
        else
          res.status(204).send('Removed');
      });
    });
  return bookRouter;
};
module.exports = routes;
