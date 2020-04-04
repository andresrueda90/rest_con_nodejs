var express = require('express');
const Place = require('../models/Place')
var router = express.Router();

/* GET home page. */
router.route('/').get((req,res)=>{
    Place.find({}).then((doc)=>{res.json(doc)}).catch((error)=>{res.json(error)})
  }).post(
    (req,res)=>{
        Place.create({
          title: 'Nuevo lugar',
          description:'Nuevo lugar creado curso',
          acceptsCreditCard:false,
          coverImage:'',
          avatarImage:'',
          openHour:0,
          closeHour:0
        }).then((doc)=>{res.json(doc)}).catch((error)=>{res.json(error)})
      }
  );



  router.route('/:id').get((req,res)=>{
    Place.findOne({'_id':req.params.id}).then((doc)=>{res.json(doc)}).catch((error)=>{res.json(error)})
  }).put(
    (req,res)=>{
        Place.update({'_id':req.params.id},{
            title: 'Nuevo lugar modificado',
            description:'Nuevo lugar creado curso Modificado',
            acceptsCreditCard:false,
            coverImage:'eeee',
            avatarImage:'wwww',
            openHour:2,
            closeHour:3
          }).then((doc)=>{res.json(doc)}).catch((error)=>{res.json(error)})
      }
  ).delete(
    (req,res)=>{
        Place.findByIdAndRemove(req.params.id).then((doc)=>{res.json(doc)}).catch((error)=>{res.json(error)})
      }
  );


module.exports = router;
