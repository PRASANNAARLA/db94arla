var lounge = require('../models/lounge');
// List of all lounges
exports.lounge_list = async function(req, res) {
    try{
        thelounges = await lounge.find();
        res.send(thelounges);
        }
        catch(err){
            res.ststus(500);
            res.send(`{"error": ${err}}`);
        }
};
// for a specific lounge.
exports.lounge_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: lounge detail: ' + req.params.id);
};
// Handle lounge create on POST.
exports.lounge_create_post = async function(req, res) {
    console.log(req.body)
    let document = new lounge();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"loungetype":"goat", "cost":12, "size":"large"}
    document.loungename = req.body.loungename;
    document.lounge_location = req.body.lounge_location;
    document.lounge_capacity = req.body.lounge_capacity;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
        res.ststus(500);
        res.send(`{"error": ${err}}`);
    }
   };
// Handle lounge delete form on DELETE.
exports.lounge_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: lounge delete DELETE ' + req.params.id);
};
// Handle lounge update form on PUT.
exports.lounge_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: lounge update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.lounge_view_all_Page = async function(req, res) {
    try{
    thelounges = await lounge.find();
    res.render('lounge', { title: 'lounge Search Results', results: thelounges });
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
   };
// for a specific Costume.
exports.lounge_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await lounge.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
