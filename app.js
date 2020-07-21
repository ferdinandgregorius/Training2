const Joi=require('joi');
const express=require('express');
var app=express();

app.use(express.json());

const users=[
    {id: 1, name: 'Frost', email: 'frost@gmail.com', password:'1234'}
];

