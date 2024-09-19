const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

const app = express();
dotenv.config({path:'config.env'});
const PORT = process.env.PORT || 8080;

//set view engine 
app.set("view engine", "ejs")

//load router.js any "/" path related to this
app.use('/',require('./server/routes/router'));

//load assets
app.use('/css', express.static(path.resolve(__dirname,"assets/css")))
app.use('/img', express.static(path.resolve(__dirname,"assets/img")))
app.use('/js', express.static(path.resolve(__dirname,"assets/js")))

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
})