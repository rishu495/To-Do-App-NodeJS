const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo_controller");

// Route for /todo/add
router.post("/add", todoController.add);

// Route for /todo/delete
router.get("/delete/:id", todoController.delete);
module.exports = router;
