const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const HTTP = require('http'),
axios = require("axios"),
bodyParser = require('body-parser'),
CryptoJS = require("crypto-js"),
OAuthClient = require('intuit-oauth');


// Routes //
var routes_1 = require('./routes/route_1');
var routes_1Controller = require('./controller/route_1Controller');

// Instance et creation de serveur //
const app = express(),
  server = HTTP.createServer(app),
  PORT = process.env.PORT || 3000;

// CORS // 
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
// JSON TYPE //
// BodyParser //
const urlencodedParser = app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// ROUTING //
// Welcome //
app.get('/', (req,res) => {
	res.send("Welcome")
})

// File //
app.use('/route_1', routes_1)
// Listening 
app.listen(3000, () => {
  console.log("API Server is running...");
  //Amuse toi ici a lancer ce que tu veux//
  routes_1Controller.functionTest();
});