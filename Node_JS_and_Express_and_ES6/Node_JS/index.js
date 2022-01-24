var express = require('express')
var app = express()



var third = require('./third');

var second = require('./second');

const path = require('path');

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    // console.log(path);
  res.send(third);
  console.log("Done Successfully");
})


app.get('/about', function (req, res) {
    // console.log(path);
  res.send(second);
  console.log("Done Successfully");
})

var server = app.listen(4000);
