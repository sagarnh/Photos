//importing modules
var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyparser = require('body-parser');
var path = require('path');

var app = express();

//port no
const port = 3000;
const route = require('./routes/route');


//adding middleware -cors
app.use(cors());

//body parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname,'public')));


//routes
app.use('/api',route);

//testing server
app.get('/',(req,res)=>{
  res.send("foobar");
});n

app.listen(port,()=>{
  console.log('server started at port'+port);
});