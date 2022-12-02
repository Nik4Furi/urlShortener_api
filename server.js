//----------------------Imports all the 'packages' which we can say global variables or imports from 'package.json' file
require('dotenv').config();
require('./db');
const express = require('express');
const app = express();

//-------------------Here all the built-in packages acquired
const path = require('path');

//--------------------Urls encodding global variables or functioning with the urls data
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//-------------------------Start to create 'Express/Routers End Points' from here------------X
if (process.env.VERSION == 'v1') {
    //------------------Use session for conductiong better facility to users and flash for flash messages after any actions
    const session = require('express-session'); //for users
    const flash = require('express-flash'); //For msgs
    
    app.use(session({
        secret : process.env.SESSION_SECRET_KEY,
        resave :false,
        saveUninitialized : false,
        cookie : {maxAge : 1000 * 60 * 60 * 24} //upto 24 hours valid
    }))
    app.use(flash())
    
    const viewsPath = path.join(__dirname, "./src/api/v1/templates/views") //Path of viewing the views folder

    //----------------Use the template engine('ejs') for specific version v1
    app.set('view engine', 'ejs');
    app.set('views', viewsPath);

    const Routers = require('./src/api/v1/routers');

    app.use('/', Routers)
}

//-----------------------Check our app version is 2, is specially for made API, which work another frontend REACT app----------------X 
if (process.env.VERSION == 'v2' ) {
    let Routers = require('./src/api/v2/routers') //our routers end points

    app.use('/api/urls',Routers)
}

//----------------------Domain and urls ports configurations variables------------X
const Domain = process.env.DOMAIN 
const Port = process.env.PORT || 8001;

//---------------------------Here we listening to the express server--------------X
app.listen(Port, () => {
    console.log(`Application listen at the ${Domain}:${Port}`);
})