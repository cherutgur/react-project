const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname,'.', 'client', 'build')));
console.log(path.join(__dirname,'.', 'client', 'build'))
app.use(bodyParser.json())

const url = "mongodb+srv://cherut:7o8hgvnQ0RGslJuN@cluster0.2kopr.mongodb.net/test";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/getData', (req, res)=>{
    res.send({date:"data from server"})
})

app.post('/getUserLastRecord', (req, res)=>{
    let {userName} = req.body;
    let last = Record.find({ 'userName':`${userName}` });
    console.log({last});
    res.send(JSON.stringify({last}))
})

const Record = mongoose.model('Record', {
    record1: Number,
    userName:String
});

// app.post("/post", (req, res) => { 
    

//     try {
//         console.log('fetch works');
//         let {userRecord,userName} = req.body;
//         console.log({userRecord});
    
//         const record = new Record({ record1:userRecord, userName});
//         record.save().then((doc) => console.log(doc));
//         res.send({ ok:true})
//       }
//       catch(err) {
//        console.log(err);
//       }
// })

const port = process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})