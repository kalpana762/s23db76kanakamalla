var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('parrot', { title: 'Search Results parrot' });
});
var express = require('express');
const parrot_controlers= require('../controllers/parrot');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
  if (req.user){
  return next();
  }
  res.redirect("/login");
  }
/* GET parrots */
router.get('/', parrot_controlers.parrot_view_all_Page );
router.get('/detail', parrot_controlers.parrot_view_one_Page);
router.get('/create', parrot_controlers.parrot_create_Page);
router.get('/update',secured, parrot_controlers.parrot_update_Page);
router.get('/delete', parrot_controlers.parrot_delete_Page);


module.exports = router;