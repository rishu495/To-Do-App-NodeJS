// require library
const mongoose=require('mongoose');

// Connecting to the Database
mongoose.connect('mongodb://localhost/to_do_app_db');

// acquire the connection 
const db=mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connecting to db'));

// Checking the connection and printing success message
db.once('open',function(){
    console.log('Successfully connected to the database');
});