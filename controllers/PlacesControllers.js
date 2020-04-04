const Place = require('../models/Place');

function index(req,res){
    //todos los lugares
    Place.find({}).then((doc)=>{res.json(doc)}).catch((error)=>{res.json(error)})
}

function show(req,res){
    //busquedad individual
    Place.findOne({'_id':req.params.id}).then((doc)=>{res.json(doc)}).catch((error)=>{res.json(error)})
}


function create(req,res){
    //crear registros
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

function update(req,res){
    //actualizar registros
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

function destroy(req,res){
    //aliminar registros
    Place.findByIdAndRemove(req.params.id).then((doc)=>{res.json(doc)}).catch((error)=>{res.json(error)})
}

module.exports = {index,show,create,update,destroy}