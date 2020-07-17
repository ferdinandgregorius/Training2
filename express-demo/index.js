const express=require('express');
const app=express();

//route handler
app.get('/',function(req, res){
    res.send('Hello world');
}); //app.get(parameter1(path), parameter2(callback function))

app.listen(3000, function(){
    console.log('Listening to port 3000');
});