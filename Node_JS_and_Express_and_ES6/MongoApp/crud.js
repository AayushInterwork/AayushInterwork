var express = require('express');
var app = express();

app.get('/crud',(req,resp)=>{
    resp.send("Hello World");
})

app.listen(4000);