'use strict';

var mongoose = require('mongoose'),
Schedule = mongoose.model('Schedules');

exports.list_all_schedules = function(req, res) {
  Schedule.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.status(200).json(schedule);
  });
};

exports.create_a_schedule = function(req, res) {
  var new_schedule = new Schedule(req.body);
  new_schedule.save(function(err, task) {
    if (err)
      res.send(err);
    res.status(200).json(schedule);
  });
};


exports.read_a_schedule = function(req, res) {
  Schedule.findById(req.params.scheduleId, function(err, task) {
    if (err)
      res.send(err);
    res.json(schedule);
  });
};


exports.update_a_schedule = function(req, res) {
  Schedule.findOneAndUpdate({_id: req.params.scheduleId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(schedule);
  });
};


exports.delete_a_schedule = function(req, res) {


  Schedule.remove({
    _id: req.params.scheduleId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Schedule successfully deleted' });
  });
};