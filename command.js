"use strict";
var express = require('express');
var router = express.Router();
var db = require('./db');

//import
var CommandSend = require('./domainmodel/commandSend');
var CommandGet = require('./domainmodel/commandGet');



router.post('/',function(req,res){

    let command = new CommandSend.CommandSend();
    let h = parseInt(req.body.ch);
    let d = parseInt(req.body.cd);
    let c = req.body.c;
    console.log(h, d, c);
    let result = command.create(h, d, c);
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
        db.connection.query(`select c.h, c.d, group_concat(c.c separator ', ') as command from command as c GROUP BY c.h, c.d;`, function(err, c, fields){
            data['command'] = c;
        });
        setTimeout((function() {res.send(data)}), 1000);
    });

});

//exports
module.exports = router;
