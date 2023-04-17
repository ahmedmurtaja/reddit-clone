const express = require('express');

const router = express.Router();

router.get('/ahmed', (req, res) => {
  res.status(200).send({
    msg: 'Hello',
  });
});

module.exports = router;
