(function () {

    'use strict';

    var express = require('express');
    var router = express.Router();
    var apiResponse = require('../json/model.json');

    // Api
    router.get('/', function ( req, res ) {
        res.send(apiResponse);
    });

    router.get('/test', function (req, res) {
        res.send('this is a test');
    });

    module.exports = router;

})();