const express = require('express');
var mongoose = require('mongoose'),
Schedule = mongoose.model('Schedules');

const router = new express.Router();

router.get('/dashboard', (req, res) => {
  
  var sc = Schedule.find({}, function(err, schedules) {
    if (err)
      res.send(err);
    	return res.json(schedules);
  });

  console.log(sc);

  res.status(200).json({
    message: "You're authorized to see this secret message."

  });
});


module.exports = router;
