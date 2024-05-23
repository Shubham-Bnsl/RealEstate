import { mongoose } from "mongoose";

const userSchema = new mongoose.Schema({

    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        
    },
    avatar:{
        type: String,
        default:"https://st4.depositphotos.com/4259987/24254/i/450/depositphotos_242540222-stock-photo-close-architect-formal-wear-helmet.jpg"        
    },
}, {timestamps: true});

const User =  mongoose.model('User', userSchema);

export default User;