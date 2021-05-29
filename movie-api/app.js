const express=require ('express');
const path=require('path');
const cors=require('cors');
const api = require('./routes/api');
const bodyParser=require ('body-parser') 

const app=express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.options('*',cors());
app.use(express.static(path.join(__dirname,'public')));
app.use('',api)
const port=3002
app.listen(port,
   ()=>console.log('app listning on port ${port}!'))