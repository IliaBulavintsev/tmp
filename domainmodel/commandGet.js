"use strict";
var express = require('express');
var router = express.Router();

//import
var CommandMapper = require('../mapper/command');

class CommandGet {

    constructor(){
        this.mapper = new CommandMapper.CommandMapper({});
    }

    get(){
        // return this.collection.get();
    }
}

//exports
module.exports.CommandGet = CommandGet
