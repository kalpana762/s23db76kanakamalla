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

// Handle parrot update form on PUT.
exports.parrot_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await parrot.findById( req.params.id)
// Do updates of properties
if(req.body.parrot_color)
toUpdate.parrot_color = req.body.parrot_color;
if(req.body.parrot_breed) toUpdate.parrot_breed = req.body.parrot_breed;
if(req.body.parrot_price) toUpdate.parrot_price = req.body.parrot_price;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};
