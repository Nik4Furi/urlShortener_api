const mongoose = require('mongoose');

mongoose.connect(process.env.URL).
then(()=>{
    console.log("Connection successfully...");
})
.catch((e)=>{
    console.log("Internal server error ", e);
})