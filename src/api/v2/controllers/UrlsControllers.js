//---------------------------imports all the modals, middlewares and other config functions ----------X
const UrlsModal = require('../../../modals/UrlsModal'); //urls modal 

const DelDoc24Hours = require('../../../config/DelDoc24Hours'); //Deleting urls data automatically which is 24 hours old 

function UrlsControllers() {
    return {
        //Fetch all the urls data from database ,using GET '/api/urls/FetchUrls'
        async FetchUrls(req, res) {
            try {
                let urls = await UrlsModal.find()

                try {  await DelDoc24Hours(UrlsModal)
                } catch (error) {   }

                return res.status(200).json({ success: true, msg: "Fetch all the data from database", urls })

            } catch (error) { return res.status(500).json({ success: false, msg: `${error}` }) }
        },

        //Post the urls into database, using POST '/api/urls/PostUrl'
        async PostUrl(req, res) {
            //Get the constraints from req.body
            try {
                const { url } = req.body

                //Check is it blank
                if (!url) { return res.status(401).json({ success: false, msg: "url field is required, Plz fill again " }) }

                //If is not blank then check this url is already exist in our database
                let urls = await UrlsModal.findOne({ fullurl: url })
                if (urls) { return res.status(400).json({ success: false, msg: `${urls.fullurl} is already exist, Plz use this` }) }

                try {  await DelDoc24Hours(UrlsModal)
                } catch (error) {   }

                //If urls data not found then save into database
                urls = await UrlsModal({ fullurl: url })
                await urls.save()

                return res.status(201).json({ success: true, msg: "Url has been short successfully ", urls })
            } catch (error) { return res.status(500).json({ success: false, msg: `${error}` }) }

        }
    }
}

module.exports = UrlsControllers;