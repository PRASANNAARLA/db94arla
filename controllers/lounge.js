var lounge = require('../models/lounge');
// List of all lounges
exports.lounge_list = async function (req, res) {
    try {
        thelounges = await lounge.find();
        res.send(thelounges);
    } catch (err) {
        res.ststus(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific lounge.
exports.lounge_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: lounge detail: ' + req.params.id);
};
// Handle lounge create on POST.
exports.lounge_create_post = async function (req, res) {
    console.log(req.body)
    let document = new lounge();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"loungetype":"goat", "cost":12, "size":"large"}
    document.loungename = req.body.loungename;
    document.lounge_location = req.body.lounge_location;
    document.lounge_capacity = req.body.lounge_capacity;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.ststus(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle lounge delete on DELETE.
exports.lounge_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await lounge.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle lounge update form on PUT.
// exports.lounge_update_put = function(req, res) {
//  res.send('NOT IMPLEMENTED: lounge update PUT' + req.params.id);
// };

// VIEWS
// Handle a show all view
exports.lounge_view_all_Page = async function (req, res) {
    try {
        thelounges = await lounge.find();
        res.render('lounge', {
            title: 'lounge Search Results',
            results: thelounges
        });
    } catch (err) {
        res.error(500, `{"error": ${err}}`);
    }
};
// for a specific Costume.
exports.lounge_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await lounge.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle Lounge update form on PUT.
exports.lounge_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await lounge.findById(req.params.id)
        // Do updates of properties
        if (req.body.loungename) toUpdate.loungename = req.body.loungename;
        if (req.body.lounge_location) toUpdate.lounge_location = req.body.lounge_location;
        if (req.body.lounge_capacity) toUpdate.lounge_capacity = req.body.lounge_capacity;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};

// Handle a show one view with id specified by query
exports.lounge_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await lounge.findById(req.query.id)
        res.render('loungedetail', {
            title: 'Lounge Detail',
            toShow: result
        });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a Lounge.
// No body, no in path parameter, no query.
// Does not need to be async
exports.lounge_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('loungecreate', { title: 'Lounge Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a Lounge.
// query provides the id
exports.lounge_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await lounge.findById(req.query.id)
        res.render('loungeupdate', { title: 'Lounge Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle a delete one view with id from query
exports.lounge_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await lounge.findById(req.query.id)
        res.render('loungedelete', { title: 'Lounge Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
