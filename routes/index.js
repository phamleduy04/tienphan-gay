const router = require('express').Router();
const path = require('path');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, '../assets/img.png'));
});

module.exports = router;
