// Requiring Add Todo Model Schema
const Todo=require('../models/add_todo');

// function calls when home function passed from router,  fetching data from db
module.exports.home=function(req,res){
    Todo.find({},function(err,data){
        if(err){
            console.log('Error in Fetching Todos :: ',err);
            return ;
        }
        return res.render('home',{
            todo_list:data
        });
    });
    
}