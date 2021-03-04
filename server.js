const express = require('express');
const app = express();
const path = require('path');
const fetch = require('node-fetch');

// app.use(express.static(path.join(__dirname+ '/client/build')));

app.use(express.static(path.join(__dirname,'.', 'client', 'build')));
console.log(path.join(__dirname,'.', 'client', 'build'))

app.get('/getData', (req, res)=>{
    res.send({date:"data from server"})
})

const port = process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})