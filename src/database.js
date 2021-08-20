import mongoose from "mongoose";

// const url = "mongodb://localhost:4000/test";

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/test', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection

connection.once('open', () => {
    console.log("DB conectada");
});