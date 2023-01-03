var express = require('express'),
router = express.Router(),
authController = require("../controller/route_1Controller");

// baseUrl //
router.get('/', function(req, res) {
  res.send(authController.functionTest());
});


module.exports = router;