var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var lounge_controller = require('../controllers/lounge');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// lounge ROUTES ///
// POST request for creating a lounge.
router.post('/resource/lounges', lounge_controller.lounge_create_post);
// DELETE request to delete lounge.
router.delete('/resource/lounges/:id', lounge_controller.lounge_delete);
// PUT request to update lounge.
router.put('/resource/lounges/:id', lounge_controller.lounge_update_put);
// GET request for one lounge.
router.get('/resource/lounges/:id', lounge_controller.lounge_detail);
// GET request for list of all lounge items.
router.get('/resource/lounges', lounge_controller.lounge_list);
module.exports = router;