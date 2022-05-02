const mongoose = require("mongoose")

const AuthorSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Author Name Is Required."]
    }
}, {timestamps: true})

module.exports.Author = mongoose.model("Author", AuthorSchema)