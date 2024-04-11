import User from "../modals/user.modal.js";
import bcryptjs from 'bcryptjs'

export const signup = async(req, res) =>{
    const { username, password, email} = req.body;
    const hashPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({username, password:hashPassword, email});
    try{
        await newUser.save();
        res.status(201).json('User created successfully!');
    }catch(error){
        res.status(500).json(error.message);
    }
};
