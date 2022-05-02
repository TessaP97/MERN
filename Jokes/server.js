const express = require("express");
const app = express();
const db_name = "jokesdb";
const port = 8000;


require("./server/config/mongoose.config")(db_name);

app.use(express.json());
require("./server/routes/jokes.routes")(app);
app.listen(port, () => {
    console.log(`Listening on port ${port} for Requests to Respond to.`)
});