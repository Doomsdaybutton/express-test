const express = require('express');
const path = require('path');

//import the router from router.js
const router = require('./router');

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
    try{
        res.send("last callback");
    } catch(e){
        console.log("whoops produces an error"+e);
    }
})

app.get('/error', function(req, res){
    throw new Error('ööööö');
    res.send('this message wont be sent because of the error')
})

app.use(express.static(path.join(__dirname, 'public')));

//every request to the router url will be routed through the router defined in router.js
app.use('/router', router);

//Error handler
app.use(function errorHandler(err, req, res, next){
    console.log("an error occured")
    res.status(404).send('An Error occurred!');
})

app.listen(port, function(){console.log("Server listening at http://localhost:"+port)});