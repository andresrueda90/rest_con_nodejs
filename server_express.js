const express = require ('express');
const bodyParser = require ('body-parser')
const  app =  express();

app.use(bodyParser.json({}))
app.use(bodyParser.urlencoded({extended:false}))

app.set('view engine','pug');

const places = [{
    nombre:  "ruta 1"
},{
    nombre:  "ruta 2"
}] 

app.use('/public',express.static('public'))
app.get("/",(req,res)=>{
    res.json(places)
})

app.listen(8000,function(){
    console.log("Se encuentra funcionando el servidor")
})

