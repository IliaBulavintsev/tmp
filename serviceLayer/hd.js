"use strict";
var express = require('express');
var router = express.Router();

//import
var HdMapper = require('../mapper/hd');

class HdSL {

    constructor(){
        this.mapper = new HdMapper.HdMapper({});
    }

    get(){
        // return this.collection.get();
    }

    create(data){
        return this.mapper.create(data);
    }

    update(data){
        return this.mapper.update(data);
    }

    delete(data){
        return this.mapper.delete(data);
    }
}

//exports
module.exports.HdSL = HdSL
