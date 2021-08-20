import mongoose from "mongoose";

const url = "mongodb://JuanArias:juan@cluster0-shard-00-00.pzjkj.mongodb.net:27017,cluster0-shard-00-01.pzjkj.mongodb.net:27017,cluster0-shard-00-02.pzjkj.mongodb.net:27017/api?ssl=true&replicaSet=atlas-12uw9l-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
});


const connection = mongoose.connection

connection.once('open', () => {
    console.log("DB conectada");
});