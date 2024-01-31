const Mongoose = require("mongoose");



const UserSchema = new Mongoose.Schema({

    name: String,
    email: String,
    password: String
})



const userModel = Mongoose.model("registers",UserSchema);

// Add whatever you want isac...

module.exports = userModel;




