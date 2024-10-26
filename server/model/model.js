const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    fName:{  
        type: String,
        required: true,
        unique: true
    },
    fType:{
        type: String,
        required: true,
    },
    fPrice: Number
});

const menu = mongoose.model('menu',schema,'menu');
module.exports = menu;