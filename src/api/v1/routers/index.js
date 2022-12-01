//-----------------Imports all the controllers, and middlewares----------X
const Router = require('express').Router()

const HomeControllers = require('../controllers/HomeControllers') //To work for only home pages controls
const UrlsControllers = require('../controllers/UrlsControllers') //To work for urls endpoints controlling

//------------------Start to create the routers end pointes from here---------------X
Router.get('/', HomeControllers().Index); //See home page, with urls data, using GET '/'
Router.post('/PostUrl',UrlsControllers().PostUrl); //Post/submit the url into database, using POST '/PostUrl'
Router.get('*', HomeControllers().Error); //See error page, if any end points enter

module.exports = Router;