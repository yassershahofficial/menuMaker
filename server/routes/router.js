const express = require('express');
const route = express.Router();

/**
 * @description Root Route
 * @method GET /
 */
route.get('/', (req,res) => {
    res.render('index')
})

module.exports = route;