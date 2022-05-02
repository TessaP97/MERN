const {Pirate} = require("../models/pirate.model")

module.exports.test = (req, res) => {
    return res.json({message: "Test route"})
}

module.exports.createPirate = (req, res) => {
    console.log(req.body)
    Pirate.create(req.body)
        .then(newPirate => res.json(newPirate))
        .catch(err => res.status(400).json(err))
}

module.exports.allPirates = (req, res) => {
    Pirate.find().sort({name: "asc"})
        .then(allPirates => res.json(allPirates))
        .catch(err => res.json(err))
}

module.exports.onePirate = (req, res) => {
    const {pirate_id} = req.params
    Pirate.findOne({_id: pirate_id})
        .then(onePirate => res.json(onePirate))
        .catch(err => res.json(err))
}

module.exports.deletePirate = (req, res) => {
    const {pirate_id} = req.params
    Pirate.deleteOne({_id: pirate_id})
        .then(confirmation => res.json(confirmation))
        .catch(err => res.json(err))
}