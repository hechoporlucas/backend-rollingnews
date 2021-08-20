import mongoose from "mongoose";

const url = "mongodb://localhost:27017/api";

mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
});

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://JuanArias:juan@cluster0.pzjkj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


const connection = mongoose.connection

connection.once('open', () => {
    console.log("DB conectada");
});