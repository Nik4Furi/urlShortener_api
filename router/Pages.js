//Import vairables declarations
const express = require('express');
const Router = express.Router();
const Shorturl = require('../modal/Shorturl');

// Home page 
Router.get('/', async (req, res) => {
        let shorturls = await Shorturl.find()
        
        res.render('index', { title: "url-shortner",shorturls:shorturls});
 
})

//Router-2 ,That's related to post url using '/shorturl'
Router.post('/shorturls', async (req, res) => {
    //Required the variables
    let fullurl = req.body.url;
        let shorturl = await Shorturl.create({fullurl});
     
        res.redirect('/');
    
})

// Getting the all urls related shortid using '/shorturl' 
Router.get('/:shorturl',async(req,res)=>{
    let shorturl = await Shorturl.findOne({shorturl:req.params.shorturl});
    if (shorturl == null) {return res.status(400).send("not found");}

    shorturl.clicks++;
    shorturl.save();
    res.redirect(shorturl.fullurl);

})

module.exports = Router;