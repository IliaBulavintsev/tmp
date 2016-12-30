"use strict";
var express = require('express');
var router = express.Router();

//import
var PropMapper = require('../mapper/prop');

class PropSL {

    constructor(){
        this.mapper = new PropMapper.PropMapper({});
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
module.exports.PropSL = PropSL
