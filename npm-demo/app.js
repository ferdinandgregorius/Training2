const express=require('express'); //the package installed with npm --h
const app=express(); //executes express like a function which will start the express application where we can use different utility methods

app.use((req, res, next) => { //calls method 'use' which sets up a middle ware
    res.status(200).json({ //use res to send a respond
        message: 'It works !'
    });
});

module.exports=app;