const express = require('express');
const route = express.Router();
const services = require('../services/render');
const controller = require('../controller/controller')

/**
 * @description Root Route
 * @method GET /
 */
route.get('/', services.homeRoutes)

route.post('/api/menus', controller.create)
route.get('/api/menus', controller.find)
route.delete('/api/menus/:id', controller.delete)

module.exports = route;