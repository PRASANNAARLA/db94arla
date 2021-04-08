var express = require('express');
const lounge_controlers= require('../controllers/lounge');
var router = express.Router();

/* GET home page. */
router.get('/', lounge_controlers.lounge_view_all_Page );


module.exports = router;
