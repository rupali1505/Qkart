const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()
const express = require('express');
const server = express();

const PORT = process.env.PORT

mongoose.connect(process.env.MONGO_URI).then(()=>console.log("connected to database"))


server.listen(PORT,()=>console.log('server is listening on port',PORT))









