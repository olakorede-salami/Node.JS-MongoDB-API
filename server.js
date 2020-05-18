const express = require('express');
const routerPackage = require('./Routes/routes');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');
var app = express();
require('dotenv/config')

//middleware

app.use(cors());
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use('/routes', routerPackage);

//port
app.listen(7000)

//Connect DB
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, ()=> {
    console.log('database connected')
})
