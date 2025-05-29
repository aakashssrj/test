const express = require('express');

const routes = express.Router();

const TaskModel = require('../models/TaskModel.js');
const { getTasks, createTask , updateTask , deleteTask } = require('../controllers/taskControllers.js');


routes.get('/' , getTasks);
routes.post('/' , createTask);
routes.put('/:id' , updateTask);
routes.delete('/:id' , deleteTask);

module.exports = routes;