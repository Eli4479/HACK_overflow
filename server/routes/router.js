const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

route.get('/', services.homeRoutes);


route.get('/register', services.register);


route.get('/login', services.login);

route.get('/profile', services.profile);


route.get('/setting', services.setting);

route.get('/task', services.task);

route.get('/editattendence', services.editattendence);

// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

module.exports = route;