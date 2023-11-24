const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const Product = new mongoose.model("Product", formSchema);

module.exports = Product;