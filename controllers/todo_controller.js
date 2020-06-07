// Requiring Add Todo model
const Todo = require("../models/add_todo");

// Creating the todo in db
module.exports.add = function (req, res) {
    // Condition for empty submit
    if (req.body.todo.length <= 0 || req.body.category.length <= 0 || req.body.date.length <= 0) {
        return res.redirect("/");
    }
    Todo.create(req.body, function (err, data) {
        if (err) {
            console.log("Error Occured in Adding Todos", err);
            return;
        }
        console.log("Todo Added Successfully");
        return res.redirect("/");
    });
};

// Delete All selected Todos
module.exports.delete = function (req, res) {
    // Splitting the id's and deleting one by one in loop
    let singleId = req.params.id.split(",");
    for (let i = 0; i < singleId.length; i++) {
        Todo.findByIdAndDelete(singleId[i], function (err) {
            if (err) {
                console.log("error in deleting from database", err);
                return;
            }
        });
    }
    return res.redirect("back");
};
