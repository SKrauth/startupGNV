var mongoose = require("mongoose");
var Schema = mongoose.Schema;


//user models
var userSchema = new Schema ({
    name: String,
    email: String,
    password: String,
    age: Number
});

var User = mongoose.model("User", userSchema);

module.exports = User;