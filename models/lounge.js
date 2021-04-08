const mongoose = require("mongoose")
const loungeSchema = mongoose.Schema({
loungename: String,
lounge_location: String,
lounge_capacity: Number
})
module.exports = mongoose.model("lounge", loungeSchema)