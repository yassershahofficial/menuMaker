const express = require('express');
const route = express.Router();
const services = require('../services/render');
const controller = require('../controller/controller')

/**
 * @description Root Route
 * @method GET /
 */
route.get('/', services.homeRoutes)

route.get('/api/users', controller.find)
route.post('/api/users', controller.create)
route.delete('/api/users/:id', controller.delete)

module.exports = route;