const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const CONFIG = require('../config/appConfig');

const getData = async joke => {
    console.log("Fetch data from external API")
    const rawData = await fetch(CONFIG.fetchAPI.url + "/" + joke.toString());
    const jsData = await rawData.json();
    return jsData;
}

// mounting process matches localhost:3000/ps4
// route using post method
router.route('/')
    .post( (req, res, next) => {
        console.log("route using POST method")

        //incoming external data render to back-end
        getData(req.body.jokes)
            .then(jsData => res.render('ps4',
                {
                    'jokes' : jsData,
                }    ))
            .catch(error => console.log("Failed to fetch JSON"))
    })


module.exports = router;