"use strict";
var express = require('express');
var router = express.Router();

//import
var CommandMapper = require('../mapper/command');

class CommandSend {

    constructor(){
        this.mapper = new CommandMapper.CommandMapper({});
    }

    create(h, d, c){
        return this.mapper.create(h, d, c);
    }
}

//exports
module.exports.CommandSend = CommandSend
