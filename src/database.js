import mongoose from "mongoose";

const url = "mongodb+srv://JuanArias:juan@cluster0.pzjkj.mongodb.net";

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