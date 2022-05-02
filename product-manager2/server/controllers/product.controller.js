const Product = require('../models/product.model')

module.exports.test = (req, res) => {
    res.json({
        message : "TEST MESSAGE"
    })
}

module.exports.allProducts = (req, res) => {
    Product.find({})
            .then(allProducts => res.json({allProducts}))
            .catch(err => res.json({err}))
}

module.exports.createProduct = (req, res) => {
    console.log("hitting the create product controller")
    console.log(req.body)
    Product.create(req.body)
            .then(newProduct => res.json({newProduct}))
            .catch(err => {
                res.status(400).json(err)
            })
}

module.exports.findOneProduct = (req, res) => {
    const {id} = req.params
    Product.findOne({_id: id })
            .then(oneProduct => res.json(oneProduct))
            .catch(err => res.json(err))
}