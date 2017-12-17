let server = require("express");
let app = server();
let fs = require("fs");
let path = require("path");
let mongoose = require("mongoose"); // let mongo = require("mongodb").MongoClient;
let port = process.env.PORT || 8080;
let dbUri = ""
let app = express();

// ... 

app.listen(port,function(){
    console.log('everything is ok');
})

// } ?