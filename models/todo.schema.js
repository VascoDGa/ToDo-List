import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    data : String,
    done : {
        type : Boolean,
        default : false
    },
    date : {
        type : Date,
        default : Date.now()
    }
})

export default mongoose.model('Todo', todoSchema)