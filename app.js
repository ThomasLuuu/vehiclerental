const express = require('express');
const expressLayout = require('express-layout');
const mongoose = require('mongoose');
const app = express();

//db configuration
const db = require('./config/key.js');


//running
const port = process.env.PORT || 3000;

const server = app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
});

