const mongoose = require('mongoose');

//----------------imports the database configuratios variables from '.env'
const Server = process.env.DB_SERVER
const Host = process.env.DB_HOST
const Port = process.env.DB_PORT
const DB_Name = process.env.DB_NAME

mongoose.connect(`${Host}://${Server}:${Port}/${DB_Name}`,{
    useNewUrlParser : true, useUnifiedTopology: true
}).
then(()=>{
    console.log("Connection successfully...");
})
.catch((e)=>{
    console.log("Internal server error ", e);
})