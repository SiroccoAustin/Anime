const express = require("express");
const path = require("path");
const loginRouter = require("./routes/loginRoutes.js");
const cors = require('cors')
const mongoose = require("mongoose");


const app = express();


// middleware
app.use(express.json());
app.use(cors());
app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
})


app.use('/api/info', loginRouter);

mongoose.connect("mongodb://localhost:27017/admin")
    .then(()=>{
        app.listen(8000, ()=>{
            console.log("The server is working over here!!!");
        });
    })
    .catch(()=>{
        console.log("failed to connect to the database");
    })