const express  = require("express");

// const app = server();

const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const mongoose = require("mongoose"); // let mongo = require("mongodb").MongoClient;

const port = process.env.PORT || 8080;
const dbUri = "mongodb://shortenuri:HishorturlsDB#users#datax:@ds159856.mlab.com:59856/shorturls";

const app = express();
app.use(bodyParser.json());
app.use(cors());

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
})

// } ?