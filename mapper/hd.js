"use strict";
var express = require('express');
var router = express.Router();
var db = require('../db');

class HdMapper {

    constructor(opt){
    }

    get(){

    }

    create(data){
        db.connection.query('select name from device where id='+data[1]+';', data, function(err, rows, fields){
            console.log(rows);
            console.log(rows[0]['name']);
            db.connection.query('INSERT INTO ' + rows[0]['name']+' values();', data, function(err, row, fields){
                console.log(parseInt(row['insertId']));
                db.connection.query('INSERT INTO hdl SET h='+parseInt(data[0])+', d='+parseInt(data[1])+', l='+ parseInt(row['insertId'])+';', data, function(err, rows, fields){

                })
            })
        })

    }

    delete(data){
        db.connection.query('DELETE from hdl where id=?;', data , function(err, rows, fields) {
            db.connection.commit(function(err) {
                if (err) {
                  return connection.rollback(function() {
                    throw err;
                  });
                }
            });
        });
    }
}

//exports
module.exports.HdMapper = HdMapper;
