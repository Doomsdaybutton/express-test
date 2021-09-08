const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.get('/', function (req, res){
    res.send("hello");
});

app.get('/multiplecallbacks',function(req,res,next){
    console.log("first callback");
    res.send("first callback trying to res.send()");
    next();
}, function(req, res){
    res.send("last callback");
})

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, function(){console.log("Server listening at http://localhost:"+port)});