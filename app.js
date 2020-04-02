var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var app = express();
const Place = require('./models/Place')
const db = require('./config/database')
db.connect();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.post('/places',(req,res)=>{
  Place.create({
    title: 'Nuevo lugar',
    description:'Nuevo lugar creado curso',
    acceptsCreditCard:false,
    coverImage:'',
    avatarImage:'',
    openHour:0,
    closeHour:0
  }).then((doc)=>{res.json(doc)}).catch((error)=>{res.json(error)})
})


app.get('/places',(req,res)=>{
  Place.find({}).then((doc)=>{res.json(doc)}).catch((error)=>{res.json(error)})
})

app.get('/places/:id',(req,res)=>{
  Place.findOne({'_id':req.params.id}).then((doc)=>{res.json(doc)}).catch((error)=>{res.json(error)})
})

app.put('/places/:id',(req,res)=>{
  Place.update({'_id':req.params.id},{
    title: 'Nuevo lugar modificado',
    description:'Nuevo lugar creado curso Modificado',
    acceptsCreditCard:false,
    coverImage:'eeee',
    avatarImage:'wwww',
    openHour:2,
    closeHour:3
  }).then((doc)=>{res.json(doc)}).catch((error)=>{res.json(error)})
})


app.delete('/places/:id',(req,res)=>{
  Place.findByIdAndRemove(req.params.id).then((doc)=>{res.json(doc)}).catch((error)=>{res.json(error)})
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;
