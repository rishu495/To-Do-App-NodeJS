// Setup Express
const express=require('express');
const app=express();
const port=8000;

// Setup the Routes
app.use('/',require('./routes/index'));

// Setup the View engine as EJS
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the Server :: ${err}`);
    }

    console.log(`Server is up and running on port :: ${port}`);
});