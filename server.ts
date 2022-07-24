import express from 'express';
const fs = require('fs');

const app = express();

app.listen (5000, ()=>{
    console.log('App has been started at port 5000...');
})