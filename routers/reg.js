const express = require('express');
      router = express.Router();

router.get('/', (req, res) => {
  const user = req.body.userName;

  res.json({
    result: 1,
    data: user
  });
});

module.exports = router;
