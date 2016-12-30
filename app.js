const express = require('express');
const app = express();
var router = express.Router();

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

var home = require('./home');
var device = require('./device');
var hd = require('./hd');
var prop = require('./prop');
var command = require('./command');


['/'].forEach((path) => { app.use(path, express.static('public')); });
app.use(express.static('public'));


app.use('/home', home);
app.use('/device', device);
app.use('/hd', hd);
app.use('/prop', prop);
app.use('/command', command);

app.listen(process.env.PORT || 3000, () => {
    console.log(`App started on port ${process.env.PORT || 3000}`);
});
