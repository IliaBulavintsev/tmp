"use strict";
var express = require('express');
var router = express.Router();

//import
var HomeMapper = require('../mapper/home');

class HomeSL {

    constructor(){
        this.mapper = new HomeMapper.HomeMapper({});
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
module.exports.HomeSL = HomeSL
