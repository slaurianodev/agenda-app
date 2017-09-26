const express = require('express');
var mongoose = require('mongoose'),
Schedule = mongoose.model('Schedules');

const router = new express.Router();

router.get('/dashboard', (req, res) => {
  
  var sc = findAllSchedules();

  res.status(200).json({
    message: "You're authorized to see this secret message.",
    message2: sc
  });
});

function findAllSchedules(){
	var result = Schedule.find().then(function(result){

	});
	console.log(result);
	return result;
}

module.exports = router;
