var parrot = require('../models/parrot');
// List of all parrots
exports.parrot_list = async function(req, res) {
    try{
    theparrots = await parrot.find();
    res.send(theparrots);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// for a specific parrot.
exports.parrot_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: parrot detail: ' + req.params.id);
};
// Handle parrot create on POST.
exports.parrot_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: parrot create POST');
};
// Handle parrot delete form on DELETE.
exports.parrot_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: parrot delete DELETE ' + req.params.id);
};
// Handle parrot update form on PUT.
exports.parrot_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: parrot update PUT' + req.params.id);
};
exports.parrot_view_all_Page = async function(req, res) {
    try{
    theparrots = await parrot.find();
    res.render('parrot', { title: 'parrot Search Results', results: theparrots });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   exports.parrot_create_post = async function(req, res) {
    console.log(req.body)
    let document = new parrot();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"parrot_type":"goat", "cost":12, "size":"large"}
    document.parrot_color = req.body.parrot_color;
    document.parrot_breed = req.body.parrot_breed;
    document.parrot_price = req.body.parrot_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   }
   exports.parrot_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await parrot.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
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
   exports.parrot_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await parrot.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    }
    exports.parrot_view_one_Page = async function(req, res) {
        console.log("single view for id " + req.query.id)
        try{
        result = await parrot.findById( req.query.id)
        res.render('parrotdetail',
        { title: 'parrot Detail', toShow: result });
        }
        catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
        }
        };
        exports.parrot_create_Page = function(req, res) {
            console.log("create view")
            try{
            res.render('parrotcreate', { title: 'parrot Create'});
            }
            catch(err){
            res.status(500)
            res.send(`{'error': '${err}'}`);
            }
            };
            exports.parrot_update_Page = async function(req, res) {
                console.log("update view for item "+req.query.id)
                try{
                let result = await parrot.findById(req.query.id)
                res.render('parrotupdate', { title: 'parrot Update', toShow: result });
                }
                catch(err){
                res.status(500)
                res.send(`{'error': '${err}'}`);
                }
                };
                exports.parrot_delete_Page = async function(req, res) {
                    console.log("Delete view for id " + req.query.id)
                    try{
                    result = await parrot.findById(req.query.id)
                    res.render('parrotdelete', { title: 'parrot Delete', toShow:
                    result });
                    }
                    catch(err){
                    res.status(500)
                    res.send(`{'error': '${err}'}`);
                    }
                    };