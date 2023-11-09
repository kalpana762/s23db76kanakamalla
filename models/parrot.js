const mongoose = require("mongoose")
const costumeSchema = mongoose.Schema({
parrot_color: String,
parrot_breed: String,
parrot_price: Number
})
module.exports = mongoose.model("parrot",costumeSchema)