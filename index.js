const express  = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const port = process.env.PORT || 8080;
const mongoose = require("mongoose"); // let mongo = require("mongodb").MongoClient;
const dbUri = "mongodb://shortenuri:HishorturlsDB#users#datax:@ds159856.mlab.com:59856/shorturls";

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/new/:url(*)', (req, res, next) => {

    // ES5

    // ES6
    let { url } = req.params;

});

/*
app.use('/',express.static('public'));

app.use('/',express.static('public'));

// app.use('/',express.static('public'));
app.get('/new/:url(*)',function(req,res){

// ... 
app.get('/new/:url(*)',function(req,res){

*/

// listen  

app.listen(port, ()=> {
    console.log('Everything is ok');
});
