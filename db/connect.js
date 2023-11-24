const mongoose = require('mongoose');

const uri = "mongodb+srv://Beprodeep:Beprodeep4718@cluster0.lfhkity.mongodb.net/simple_form?retryWrites=true&w=majority";

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log("connected to database");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connect;