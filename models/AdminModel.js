const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    walletId: String,
    bankAccount: String
}, {
    collection: "crypto"
});

module.exports = mongoose.model("crypto", adminSchema);
//https://images.unsplash.com/photo-1617952261559-317eb6f3b581?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60