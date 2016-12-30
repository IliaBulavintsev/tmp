"use strict";
var express = require('express');
var router = express.Router();
var db = require('../db');

class PropMapper {

    constructor(opt){
    }

    get(){

    }

    create(data){
        console.log('insert data:', data);
        db.connection.query('alter table ' + data[0] + ' add ' + data[1] + ' varchar(10);', data, function(err, rows, fields) {

            db.connection.commit(function(err) {
                if (err) {
                  return connection.rollback(function() {
                    throw err;
                  });
                }
            });
        });
    }

    update(data){
        db.connection.query('ALTER TABLE ? ALTER COLUMN ? SET DEFAULT ?;', data, function(err, rows, fields) {

        });
    }

    delete(data){
        console.log('____',data);
        db.connection.query('ALTER TABLE '+data[0]+' DROP COLUMN '+data[1]+';', data , function(err, rows, fields) {
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
module.exports.PropMapper = PropMapper;
