import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/keeperNote')
    .then(() => {
        console.log('connection successfull with database')
    })
    .catch((e) =>
        console.log(e))