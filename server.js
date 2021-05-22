const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config()

app.use(express.static(path.join(__dirname,'.', 'client', 'build')));
console.log(path.join(__dirname,'.', 'client', 'build'))
app.use(bodyParser.json())

const url = process.env.URL;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });


app.get('/getUsers', async (req, res) => {
    try {
        let users = await Record.find();
        res.send({users})
    } catch (error) {
        console.log(error);
    }
   
})


app.get('/getUserData', (req, res)=>{
    res.send({date:"data from server2"})
})

app.post('/validatUserName', async (req, res)=>{
    try{
        let {userName} = req.body;
        let {password} = req.body;
        // console.log({userName});
        console.log({password});
        // console.log(req.body);
        let userData = await Record.findOne({ userName: userName }).exec();
        if(userData){
            if(userData.password===password){
                res.send(JSON.stringify({userData}))
            }  else {
                res.send(JSON.stringify({err:'err'}))
            }

        }else{
            const user = new Record({ record1: 0, record2: 0, record3: 0, userName, password});
            user.save().then((doc) => 
            res.send({ userData:doc})
            );
            
        }
    }
    catch(err) {
        console.log(err);
    }
})

app.post('/getUserDataByName', async (req, res)=>{
    try{
        let {userName} = req.body;

        // console.log(req.body);
        let userData = await Record.findOne({ userName: userName }).exec();
        if(userData){
            
                res.send(JSON.stringify({userData}))
        }
              else {
                res.send(JSON.stringify({err:'err'}))
            }

        
    }
    catch(err) {
        console.log(err);
    }
})

// app.post('/getUserLastRecord', async (req, res)=>{
//     try{
//         let {userName} = req.body;

//         console.log({userName});

//         let userData = await Record.findOne({ userName: userName }).exec();
//         console.log({userData});
//         res.send(JSON.stringify({userData}))
//     }
//     catch(err) {
//         console.log(err);
//     }
// })

app.put('/updateRecord', async (req, res)=>{
    try{
        let {userName} = req.body;
        let {newRecord} = req.body;
        let {level} = req.body;
        let uptateUser;
        if (level===15) {
            uptateUser =  await Record.findOneAndUpdate({ userName: userName }, {record1 : newRecord})
        }else if (level===10){
           uptateUser =  await Record.findOneAndUpdate({ userName: userName }, {record2 : newRecord})
        }else if (level===5){
            uptateUser =  await Record.findOneAndUpdate({ userName: userName }, {record3 : newRecord})
         }
      
       console.log(uptateUser)
       if(uptateUser){
        res.send(JSON.stringify('successfully updated'))
       }else{
        res.send(JSON.stringify('user not found'))
       }
       
    }
    catch(err) {
        console.log(err);
    }

})

// A.findOneAndUpdate(conditions, update)

const Record = mongoose.model('Record', {
    record1: Number,
    record2: Number,
    record3: Number,
    userName: {
      type : String,
      required: true,
      unique: true,
      minlength: 2
    },
    password:String
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