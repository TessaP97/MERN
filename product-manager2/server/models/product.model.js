const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product Name must be supplied"]
    },
    price: {
        type: Number,
        min: [0, "You cannot have Negative Numbers"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    }
}, {timestamps: true})

const Product = mongoose.model("Product", ProductSchema)
module.exports = Product