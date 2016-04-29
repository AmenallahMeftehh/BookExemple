var express = require ('express');

var routes = function(Docum){
  var documRouter = express.Router();
  documRouter.route('/')
    .post(function(req, res){
      var docum = new Docum(req.body);
      docum.save();
      res.status(201).send(docum);
    })
    .get(function(req, res){
      var query = {};
      if(req.query.id){
        query.id = req.query.id;
      }
      Docum.find(query, function(err, docums){
        if(err)
          res.status(500).send(err);
        else
          res.json(docums);
      });
    });
  //definir un middleware pour ne pas répéter
  // Docum.findById
  documRouter.use('/:documId', function(req,res,next){
      Docum.findById(req.params.documId, function(err,docum){
        console.log(req.params.documId);

        if(err)
          res.status(500).send(err);
        else if(docum)
        {
          req.docum = docum;
          console.log(req.docum);
          next();
        }
        else
        {
          res.status(404).send("no documentaire found");
        }
      });
  });

  //definir le Docum router pour recuperer un seule livre à partir de la liste des livres
  documRouter.route('/:id')
    .get(function(req, res){
        res.json(req.docum);
    })
    .put(function(req, res){
        Docum.id=req.params.id;
          Docum.findOneAndUpdate({_id:Docum.id}
            ,{

                $set: {
                      title: req.body.title
                    , description: req.body.description
                    , langue: req.body.langue
                    , date:req.body.date
                    , vu: req.body.vu

            }

        },    function(err){
            if(err)
              res.status(500).send(err);
            else{
                res.json(req.docum);
              }
          });
      })
    .delete(function(req, res){
      Docum.id=req.params.id;
      console.log(req.Docum);
      Docum.findOneAndRemove({_id:Docum.id},function(err){
        if(err)
          res.status(500).send(err);
        else
          res.status(204).send('Removed');
      });
    });
  return documRouter;
};
module.exports = routes;
