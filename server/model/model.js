const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    fname:{  
        type: String,
        required: true,
        unique: true
    },
    ftype:{
        type: String,
        required: true,
    },
    fprice: String
});

const menu = mongoose.model('menu',schema,'menu');
module.exports = menu;