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

route.get('/deadline', services.deadline);
route.get('/score', services.score);
route.get('/attendence', services.attendence);

// API
route.post('/api/users', controller.create);
route.post('/login', controller.findthis);
module.exports = route;


// adding different route and calling their function from services 