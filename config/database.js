const mongoose =  require ('mongoose');
const dbName = 'places_db';

module.exports = {
    connect: ()=>{ mongoose.connect('mongodb://127.0.0.1/'+dbName)},
    dbName,
    connection:()=>{
        if(mongosee.connection){
            return mongoose.connection
        }else{
            return this.connect();
        }
    }
}

