const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/product-manager2", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("CONNECTED TO PRODUCTS DB"))
.catch(() => console.log("ERROR: ", err))