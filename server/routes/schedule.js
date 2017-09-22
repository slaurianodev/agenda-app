'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/scheduleController');

  // todoList Routes
  app.route('/schedules')
    .get(todoList.list_all_schedules)
    .post(todoList.create_a_schedule);


  app.route('/schedules/:taskId')
    .get(todoList.read_a_schedule)
    .put(todoList.update_a_schedule)
    .delete(todoList.delete_a_schedule);
};