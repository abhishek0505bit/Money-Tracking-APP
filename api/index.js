const express = require('express');// importing express library
const app = express();// creating an express app instance. acts as an express app allows us to define routes, middlewares and other functionality
const port = 4040; // defining a port 

// setting up a route 
app.get('/api/test', (req, res)=>{
    res.json('test OK')

})

// starting the server and listening at the specified port 
app.listen(port , ()=>{
    console.log("server started at ", port)
});