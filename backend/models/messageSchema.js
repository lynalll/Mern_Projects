import mongoose from "mongoose";
import validator from 'validator';


const messageSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Name required"],
        minLength:[3, "Name atleast must contain three characters!"]
    },
    email:{
        type:String,
        required:[true, "Email required"],
        validate:[validator.isEmail, "Please provide a valid email address"]
    },
    subject:{
        type:String,
        required:[true, "Subject required"],
        minLength:[5, "Name atleast must contain five characters!"]
    },
    message:{
        type:String,
        required:[true, "Message required"],
        minLength:[10, "Name atleast must contain ten characters!"]
    },
});

export const Message=mongoose.model("Message",messageSchema);