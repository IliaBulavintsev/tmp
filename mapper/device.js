"use strict";
var express = require('express');
var router = express.Router();
var db = require('../db');

class DeviceMapper {

    constructor(opt){
    }

    get(){

    }

    create(data){
        console.log('insert data:', data);
        db.connection.query('INSERT INTO device SET `name` = ?;', data, function(err, rows, fields) {
            db.connection.query('CREATE TABLE '+data[0]+' (id INT(11) NOT NULL AUTO_INCREMENT, name CHAR(10) DEFAULT "'+data[0]+'", PRIMARY KEY (id));', data, function(err, rows, fields) {
                db.connection.query('INSERT INTO '+ data[0]+' values();');
            })

        });
        // db.connection.query('alter table ' + data[0] + ' add ' + data[1] + ' varchar(10);', data, function(err, rows, fields) {
        //
        //     db.connection.commit(function(err) {
        //         if (err) {
        //           return connection.rollback(function() {
        //             throw err;
        //           });
        //         }
        //     });
        // });
    }

    update(data){
        db.connection.query('ALTER TABLE ? ALTER COLUMN ? SET DEFAULT ?;', data, function(err, rows, fields) {

        });
    }

    delete(data){
        db.connection.query('DROP table '+data[0]+';', function(err, rows, fields) {
            db.connection.query('DELETE from device where id='+data[1], data , function(err, rows, fields) {

            });
        });
        // console.log('____',data);
        // db.connection.query('ALTER TABLE '+data[0]+' DROP COLUMN '+data[1]+';', data , function(err, rows, fields) {
        //     db.connection.commit(function(err) {
        //         if (err) {
        //           return connection.rollback(function() {
        //             throw err;
        //           });
        //         }
        //     });
        // });
    }
}

//exports
module.exports.DeviceMapper = DeviceMapper;
