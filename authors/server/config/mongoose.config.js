const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/authors", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("CONNECTED TO AUTHORS DB"))
.catch(() => console.log("ERROR: ", err))