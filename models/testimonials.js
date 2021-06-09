const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
    imageLink : String,
    location : String,
    quote : String
});

module.exports = mongoose.model("testimonials", testimonialSchema);