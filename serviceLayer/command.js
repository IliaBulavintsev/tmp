"use strict";
var express = require('express');
var router = express.Router();

//import
var CommandMapper = require('../mapper/command');

class CommandSL {

    constructor(){
        this.mapper = new CommandMapper.CommandMapper({});
    }

    get(){
        // return this.collection.get();
    }

    create(h, d, c){
        return this.mapper.create(h, d, c);
    }
}

//exports
module.exports.CommandSL = CommandSL
