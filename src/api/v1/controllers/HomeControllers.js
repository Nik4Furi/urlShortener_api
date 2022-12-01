//-------------------Imports all the middlewares, modals or others packages function which is used in Home Controllers----------X
const UrlsModal = require('../../../modals/UrlsModal'); //Our modal of database

const DelDoc24Hours = require('../../../config/DelDoc24Hours'); //Deleting any urls data which is 24 hours old

//---------------------------------Home controllers functions and methods start from here-------------X
function HomeControllers() {
    return {
        //See the home page, with urls data from database
        async Index(req, res) {
           const urls = await UrlsModal.find()

           await DelDoc24Hours(UrlsModal)

            res.render('index', {urls: urls });
        },
         
        //See the error page, when enter any other endpoints 
        async Error(req,res){
            res.render('error');
        }
    }
}

module.exports = HomeControllers;