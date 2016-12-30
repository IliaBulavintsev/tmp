"use strict";
var express = require('express');
var router = express.Router();
var db = require('./db');

//import
var DeviceSL = require('./serviceLayer/device');

router.post('/',function(req,res){

    // console.log(req.body);
    let device = new DeviceSL.DeviceSL();
    let result = device.create([req.body.device]);
    console.log(result);
    result ? res.send("OK") : res.send("BAD");

});

router.delete('/',function(req,res){


    let device = new DeviceSL.DeviceSL();
    let result = device.delete([req.body.table, req.body.id]);
    console.log(result);
    result ? res.send("OK") : res.send("BAD");

});

router.get('/',function(req,res){
    let data =  {}
    db.connection.query('SELECT * FROM device;', function(err, rows, fields) {
        if (err) throw err;
        console.log('The solution is: ', rows);
        data.device = rows;
        rows.forEach(el => {
            console.log(el.name);
            db.connection.query(`SELECT * from ${el.name} where id = 1;`, function(err, result, fields){
                delete result[0]['id'];
                delete result[0]['name'];
                data[el.name] = result;
            });
        })
        setTimeout((function() {res.send(data)}), 1000);
    });

});

//exports
module.exports = router;
