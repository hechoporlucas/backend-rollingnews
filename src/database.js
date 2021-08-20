import mongoose from "mongoose";

const url = "mongodb://localhost/test";

mongoose.connect(url || process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection

connection.once('open', () => {
    console.log("DB conectada");
});