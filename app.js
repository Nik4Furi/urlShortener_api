//Import the variables desclarations
require('dotenv').config();
require('./db');
const express = require('express');
const app = express();
const path = require('path');
const Pages = require('./router/Pages');

//Declarations the variables
const port = process.env.PORT || 8001;
const viewsPath = path.join(__dirname,"./templates/views");

//Use thr url-encoded specific setup
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// SET OF CONTENT STUFF 
app.set('view engine','ejs');
app.set('views',viewsPath);

//USE MIDDLE WARES STUFF 
app.use('/',Pages);

// Listen to the server 
app.listen(port,()=>{
    console.log(`Application listen at the http://localhost:${port}`);
})