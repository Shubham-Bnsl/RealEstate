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
        default:"https://img.freepik.com/free-vector/simple-vibing-cat-square-meme_742173-4493.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721692800&semt=sph"        
    },
}, {timestamps: true});

const User =  mongoose.model('User', userSchema);

export default User;