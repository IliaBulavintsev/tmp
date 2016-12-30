"use strict";
var express = require('express');
var router = express.Router();
var db = require('./db');

//import
var PropSL = require('./serviceLayer/prop');

router.post('/',function(req,res){
    let device = new PropSL.PropSL();
    let result = device.create([req.body.add_table, req.body.param, req.body.add_def]);
    console.log(result);
    result ? res.send("OK") : res.send("BAD");
});

router.delete('/',function(req,res){


    let device = new PropSL.PropSL();
    let result = device.delete([req.body.table, req.body.column]);
    console.log(result);
    result ? res.send("OK") : res.send("BAD");

});


//exports
module.exports = router;
