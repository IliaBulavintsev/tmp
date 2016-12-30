"use strict";
var express = require('express');
var router = express.Router();

//import
var DeviceMapper = require('../mapper/device');

class DeviceSL {

    constructor(){
        this.mapper = new DeviceMapper.DeviceMapper({});
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
module.exports.DeviceSL = DeviceSL
