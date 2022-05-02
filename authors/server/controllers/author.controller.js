const {Author} = require("../models/author.model")

module.exports.test = (req, res) => {
    return res.json({message: "TEST ROUTE"})
}

module.exports.createAuthor = (req, res) => {
    console.log(req.body)
    Author.create(req.body)
        .then(newAuthor => res.json(newAuthor))
        .catch(err => res.status(400).json(err))
}

module.exports.allAuthors = (req, res) => {
    Author.find().sort({name: "asc"})
    //Author.find().sort({createdAt: "asc"})
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.json(err))
}

module.exports.oneAuthor = (req, res) => {
    const {author_id} = req.params
    Author.findOne({_id: author_id})
        .then(oneAuthor => res.json(oneAuthor))
        .catch(err => res.json(err))
}

module.exports.updateAuthor = (req, res) => {
    const {author_id} = req.params
    Author.findOneAndUpdate({_id: author_id}, req.body, {new: true, runValidators: true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteAuthor = (req, res) => {
    const {author_id} = req.params
    Author.deleteOne({_id: author_id})
        .then(confirmation => res.json(confirmation))
        .catch(err => res.json(err))
}