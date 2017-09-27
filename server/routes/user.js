const express = require('express');
var mongoose = require('mongoose'),
User = mongoose.model('User');

const router = new express.Router();

router.get('/listAll',(req, res) => {
	User.find({}, function(err, users) {
    if (err)
      res.send(err);
    res.status(200).json(users);
  });
});

module.exports = router;