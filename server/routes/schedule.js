const express = require('express');
var mongoose = require('mongoose'),
Schedule = mongoose.model('Schedules');

const router = new express.Router();

router.get('/listAll', (req, res) => {
Schedule.find({}, function(err, schedule) {
    if (err)
      res.send(err);
    res.status(200).json(schedule);
  });
});

router.post('/create', (req, res) => {
  var new_schedule = new Schedule(req.body);
  new_schedule.save(function(err, schedule) {
    if (err)
      res.send(err);
    res.status(200).json(new_schedule);
  });
});


module.exports = router;