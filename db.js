"use strict";
var mysql      = require('mysql');

exports.connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'tp',
  database :  'ira',
  password : 'password'
});
