// Setup Express
const express = require("express");
const db = require("./config/mongoose");
const app = express();
const port = 8000;
app.use(express.urlencoded());
const Todo = require("./models/add_todo");
// Setup the Routes
app.use("/", require("./routes/index"));

// Setup the View engine as EJS
app.set("view engine", "ejs");
app.set("views", "./views");

// Setup the static asset folder
app.use(express.static("assets"));

// Listening server on port
app.listen(port, function (err) {
    if (err) {
        console.log(`Error in running the Server :: ${err}`);
    }

    console.log(`Server is up and running on port :: ${port}`);
});
