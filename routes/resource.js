var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var parrot_controller = require('../controllers/parrot');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// parrot ROUTES ///
// POST request for creating a parrot.
router.post('/parrots', parrot_controller.parrot_create_post);
// DELETE request to delete parrot.
router.delete('/parrots/:id', parrot_controller.parrot_delete);
// PUT request to update parrot.
router.put('/parrots/:id', parrot_controller.parrot_update_put);
// GET request for one parrot.
router.get('/parrots/:id', parrot_controller.parrot_detail);
// GET request for list of all parrot items.
router.get('/parrots', parrot_controller.parrot_list);
module.exports = router;