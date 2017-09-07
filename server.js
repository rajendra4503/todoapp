var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var port_num = require('./config/config'); 					
var port  	 = process.env.PORT || port_num.port; 				
var database = require('./config/database');
var morgan = require('morgan');
var bodyParser = require('body-parser'); 
var methodOverride = require('method-override');

//================= configuration =========================

mongoose.connect(database.url);
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));// log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

//================= routes ================================
require('./app/routes.js')(app);
//=========== listen (start app with node server.js) ============
app.listen(port);
console.log("App listening on port " + port);