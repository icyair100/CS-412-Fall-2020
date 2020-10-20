const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res, next) => {
        res.render('ps3First',{'birthday' :'October 21'})
    })

    .post((req, res, next) => {
        res.render('ps3Second',{'string': req.body.string, 'len': req.body.string.length})
    })

module.exports = router;