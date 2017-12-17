const server = require("express");
let app = express();
const app = server();
let fs = require("fs");
let path = require("path");
let mongoose = require("mongoose"); // let mongo = require("mongodb").MongoClient;
const port = process.env.PORT || 8080;

const dbUri = "mongodb://<shortenuri:HishorturlsDB#users#datax:@ds159856.mlab.com:59856/shorturls";


app.use('/',express.static('public'));

// app.use('/',express.static('public'));
app.get('/new/:url(*)',function(req,res){

// ... 
app.get('/new/:url(*)',function(req,res){
    
    // ... 

app.listen(port,function(){
    console.log('everything is ok');
})

// } ?