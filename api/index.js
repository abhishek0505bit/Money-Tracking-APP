const express = require('express');// importing express library
const app = express();// creating an express app instance. acts as an express app allows us to define routes, middlewares and other functionality
const transactionRoutes = require('./routes/transactionRoutes') // import the transaction routes
const connectDB = require('./config/db')

// cors is used, if frontend is running on other port lets say 3000, and backend is running on some other port (4040), 
 // so to receive the request from any port, we use cors, otherwise it will throw cors error(that backend is not able to listen, 
 //backend doesn't know frontend)
const cors = require('cors'); 

const port = 4000; // defining a port to connect express server 

app.use(cors());
app.use(express.json());

connectDB();


 //define the base path for transactionRoutes
app.use('/transactions', transactionRoutes); // Any route in transactionRoutes.js are availabe at /transaction path


// // when not using a router
// // setting up a route 
// app.get('/api/test', (req, res)=>{
//     res.json('test OK')

// })

// app.post('/transaction', (req, res)=>{
//     console.log("req body is ", req.body)
//     res.json(req.body);
// })

// starting the server and listening at the specified port 
app.listen(port , ()=>{
    console.log("server started at ", port)
});

//YWCIDV6ovbFqxkB3