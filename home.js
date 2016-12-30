"use strict";
var express = require('express');
var router = express.Router();
var db = require('./db');

//import
var HomeSL = require('./serviceLayer/home');

router.put('/',function(req,res){

    let home = new HomeSL.HomeSL();
    let result = home.update([req.body.device, req.body.param, req.body.val, req.body.id]);
    console.log(result);
    result ? res.send("OK") : res.send("BAD");

});

router.delete('/',function(req,res){

    let home = new HomeSL.HomeSL();
    let result = home.delete([req.body.id]);
    console.log(result);
    result ? res.send("OK") : res.send("BAD");

});

router.post('/',function(req,res){

    let home = new HomeSL.HomeSL();
    let result = home.create([req.body.name]);
    console.log(result);
    result ? res.send("OK") : res.send("BAD");

});

router.get('/',function(req,res){
    let data =  {}
    db.connection.query('SELECT * FROM home;', function(err, rows, fields) {
        if (err) throw err;
        data.home = rows;
        rows.forEach(h=>{
            data[h.id] = []
        })
        db.connection.query(`select * from device;`, function(err, result, fields){
            data['device'] = result;
            result.forEach(el =>{
                // console.log(el.name);
                db.connection.query(`select * from ${el.name};`, function(err, x, fields){
                    x.forEach(xx=>{
                        delete xx['id'];
                        delete xx['name'];
                    })

                    data[el.name] = x;
                });

            })
        });

        db.connection.query(`select hdl.id, hdl.h, hdl.d, hdl.l, d.name from hdl join device as d on hdl.d = d.id;`, function(err, y, fields){
            data['svazi'] = y;
            y.forEach(z =>{
                // console.log(z);
                data[z.h].push(z);
            })
        });
        setTimeout((function() {res.send(data)}), 1000);
    });

});

//exports
module.exports = router;
