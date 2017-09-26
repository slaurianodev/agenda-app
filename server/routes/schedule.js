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

router.put('/update/:scheduleId',(req,res) => {
Schedule.findOneAndUpdate({_id: req.params.scheduleId}, req.body, {new: true}, function(err, schedule) {
    if (err)
      res.send(err);
    res.json(schedule);
  });
});

router.delete('/delete/:scheduleId',(req,res) => {
Schedule.remove({
    _id: req.params.scheduleId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Schedule successfully deleted' });
  });
});

module.exports = router;