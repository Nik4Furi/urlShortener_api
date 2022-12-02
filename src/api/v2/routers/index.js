//-----------------Imports all the controllers, and middlewares----------X
const Router = require('express').Router()

const UrlsControllers = require('../controllers/UrlsControllers') //To work for urls endpoints controlling

//------------------Start to create the routers end pointes from here---------------X
Router.get('/FetchUrls',UrlsControllers().FetchUrls); //Fetch all the urls data from database, using GET '/api/urls/FetchUrls'
Router.post('/PostUrl',UrlsControllers().PostUrl); //Post or submit the url into database, using POST '/api/urls/PostUrl'

module.exports = Router;