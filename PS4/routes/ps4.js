const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const CONFIG = require('../config/appConfig');

const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');

const asyncSet = promisify(client.set).bind(client);
const asyncGet = promisify(client.get).bind(client);
const asyncExists = promisify(client.exists).bind(client);
const asyncExpire = promisify(client.expire).bind(client);

client.flushdb((err, response) => {
    if (err) {throw new Error('flushing error')}
});
const getData = async joke => {
    let match = await asyncExists(joke);
    if (match){
        let jsData = await asyncGet(joke);
        let response = {
            jokes: jsData,
            cached: true
        }
        // console.log(response);
        return response;
    } else {
    console.log("Fetch data from external API")
    const rawData = await fetch(CONFIG.fetchAPI.url + "/" + joke.toString());
    const jsData = await rawData.json();
    await asyncSet(joke, jsData);
    let response = {
        jokes: jsData,
        cached: false
    }
    await asyncExpire(joke, 15);
    // console.log(response);
    return response;
    }
}

// mounting process matches localhost:3000/ps4
// route using post method
router.route('/')
    .post( (req, res, next) => {
        console.log("route using POST method")

        //incoming external data render to back-end
        getData(req.body.jokes)
            .then(response => res.render('ps4',
                {
                    'jokes' : response.jokes,
                }    ))
            .catch(error => console.log("Failed to fetch JSON"))
    })


module.exports = router;