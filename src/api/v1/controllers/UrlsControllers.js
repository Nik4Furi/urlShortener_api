//--------------------------Imports all the middlewares, modals and others config functions which is build on it-------------X
const UrlsModel = require("../../../modals/UrlsModal");

//-----------------------Urls Controlling functions start from here-----------------X
function UrlsControllers() {
    return {
        //------------------Post or submit the url into database, then short its id
        async PostUrl(req, res) {

            try {
                //Get the constraints from req.body
                const { url } = req.body

                //Check the req.body.url is not blank
                if (!url) {
                    req.flash('error', 'All fields are required , Plz fill again')
                    return res.redirect('/');
                }

                let urls = await UrlsModel({ fullurl: req.body.url })

                await urls.save()

                req.flash('success', "url is short successfully")
                return res.redirect('/')

            } catch (error) {
                req.flash('error', `${error}`)
                return res.redirect('/')
            }

        }
    }
}

module.exports = UrlsControllers;