(function () {

    'use strict';

    var express = require('express');
    var router = express.Router();
    var apiResponse = require('../json/model.json');
    var apiTest = require('../json/test.json');

    // Api
    router.get('/', function ( req, res ) {
        res.send(apiResponse);
    });

    router.get('/test', function (req, res) {
        res.send(apiTest);
    });

    module.exports = router;

})();