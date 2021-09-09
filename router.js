const express = require('express');

const router = express.Router();

//you can do method chaining on router = router is chainable = methods on router return router


//add some middleware to the router
router
.use(function logTime(req, res, next){
    //Every time a request goes through this router the time will be logged
    console.log("Time: ", Date.now());

    //call next handler
    next();
    //chainable
})
.get('/',function(req,res){res.send('router yoooo');});


//export the router so that the main app can app.use the router
module.exports = router;