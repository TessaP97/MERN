const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/mern-exam", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("CONNECTED TO PIRATES DB"))
.catch(() => console.log("ERROR: ", err))