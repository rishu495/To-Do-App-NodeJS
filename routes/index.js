// Requiring express
const express = require("express");
const router = express.Router();

// Requiring home_controller
const homeController = require("../controllers/home_controller");

// route for index page
router.get("/", homeController.home);

// Using and passing all request coming from /todo to todo.js
router.use("/todo", require("./todo"));
module.exports = router;
