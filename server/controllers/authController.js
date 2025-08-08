import User from "../models/user.js";
import bcrypt from 'bcryptjs';

//Register a new user

export const registerUser = async(req, res) => {
    const {name, email, password} = req.body;

    try {
        const existingUser = await User.findOne({email});
        if(existingUser) return res.status(400).json({message: 'User already exists'});

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name, 
            email, 
            password: hashedPassword,
        })

        await newUser.save();
        res.status(201).json({message: 'User created successfully'});
    }
    catch(error){
        res.status(500).json({message: 'Server error'});
    }
}

// Login User

export const loginUser = async(req, res) => {
    const {email, password} = req.body;

    try{
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({message: 'No user found'});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({message: 'Incorrect password'});

        res.status(200).json({message: 'Login successful'});
    }
    catch(error){
        res.status(500).json({message: 'Server error'});
    }
}