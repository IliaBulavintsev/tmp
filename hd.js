"use strict";
var express = require('express');
var router = express.Router();
var db = require('./db');

//import
var HdSL = require('./serviceLayer/hd');

router.delete('/',function(req,res){
    console.log(req.body);
    let hd = new HdSL.HdSL();
    let result = hd.delete([req.body.id]);
    // console.log(result);
    result ? res.send("OK") : res.send("BAD");

});

router.post('/',function(req,res){
    // console.log(req.body);
    let hd = new HdSL.HdSL();
    let result = hd.create([parseInt(req.body.home), parseInt(req.body.d)]);
    // console.log(result);
    result ? res.send("OK") : res.send("BAD");

});


//exports
module.exports = router;
