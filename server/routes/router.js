const express = require('express');
const route = express.Router();
const render = require('../services/render');
const pdf = require('../services/pdf');
const controller = require('../controller/controller')

/**
 * @description Root Route
 * @method GET /
 */
route.get('/', render.homeRoutes)

route.post('/api/menus', controller.create)
route.get('/api/menus', controller.find)
route.delete('/api/menus/:id', controller.delete)

route.get('/generate-pdf', pdf.create)

module.exports = route;