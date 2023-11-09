var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('parrot', { title: 'Search Results parrot' });
});
var express = require('express');
const parrot_controlers= require('../controllers/parrot');
var router = express.Router();
/* GET parrots */
router.get('/', parrot_controlers.parrot_view_all_Page );
module.exports = router;