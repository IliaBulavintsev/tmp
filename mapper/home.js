"use strict";
var express = require('express');
var router = express.Router();
var db = require('../db');

class HomeMapper {

    constructor(opt){
    }

    get(){

    }

    create(data){
        db.connection.query('INSERT INTO home SET `name` = ?;', data, function(err, rows, fields) {
            if (err) throw err;
            return true;
        });
        return false;
    }

    update(data){
        db.connection.query('Update '+ data[0]+' set '+data[1]+'="'+data[2]+'" where id='+parseInt(data[3])+';', data, function(err, rows, fields) {

        });
    }

    delete(data){
        db.connection.query('DELETE from home where id=?', data , function(err, rows, fields) {

        });
    }
}

//exports
module.exports.HomeMapper = HomeMapper;
