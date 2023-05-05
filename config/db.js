const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'})


const conectarDB = async ()=>{
    try{
        await mongoose.connect(process.env.DB_MONGO,{
            UseNewUrlParser:true,
            useUnifiedTopology:true,
           //useFindAndModify:false,
        })
        console.log('Bd conectada')
    }
    catch(error){
        console.log(error)
        process.exit(1); //Detenemos la app en caso de un error
    }
}

module.exports = conectarDB