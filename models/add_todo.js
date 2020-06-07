// Requiring mongoose
const mongoose = require("mongoose");

// Defining Schema for todo db
const todoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
