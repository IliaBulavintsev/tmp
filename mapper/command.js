"use strict";
var express = require('express');
var router = express.Router();
var db = require('../db');

class CommandMapper {

    constructor(opt){
    }

    get(){

    }

    create(h, d, c){
        console.log('from mapper', h, d , c);
        db.connection.query('INSERT INTO command SET `h` =?, `d`=?, `c`=?;', [h, d, c]);

    }
}

//exports
module.exports.CommandMapper = CommandMapper;
