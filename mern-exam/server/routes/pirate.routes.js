const PirateController = require("../controllers/pirate.controller")

module.exports = app => {
    app.get("/api/test", PirateController.test)
    app.get("/api/pirates", PirateController.allPirates)
    app.post("/api/pirate/new", PirateController.createPirate)
    app.get("/api/pirate/:pirate_id", PirateController.onePirate)
    app.delete("/api/pirates/:pirate_id", PirateController.deletePirate)
}