(function () {

    'use strict';


    var express = require('express'),
        router = express.Router(),
        apiResponse = require('../json/model.json');

    // Api
    router.get('/', function ( req, res ) {
        res.send(apiResponse);
    });

    module.exports = router;

})();