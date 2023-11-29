const mongoose = require("mongoose")
const parrotSchema = mongoose.Schema({
parrot_color: String,
parrot_breed: {type:String,length:15},
parrot_price: {type:Number,min:1000,max:100000}
})
module.exports = mongoose.model("parrot",parrotSchema)