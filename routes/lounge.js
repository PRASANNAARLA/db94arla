var express = require('express');
const lounge_controlers = require('../controllers/lounge');
var router = express.Router();

/* GET home page. */
router.get('/', lounge_controlers.lounge_view_all_Page);
router.get('/detail', lounge_controlers.lounge_view_one_Page);
router.get('/create', lounge_controlers.lounge_create_Page);
router.get('/update', lounge_controlers.lounge_update_Page);
router.get('/delete', lounge_controlers.lounge_delete_Page);
module.exports = router;