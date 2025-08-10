import User from "../models/user.js";
import bcrypt from 'bcryptjs';

//Register a new user

export const registerUser = async(req, res) => {
    const {name, email, password} = req.body;

    try {
        // checking email availability

        const existingUser = await User.findOne({email});
        if(existingUser) return res.status(400).json({message: 'User already exists'});

        // password hashing

        const hashedPassword = await bcrypt.hash(password, 10);

        // creating and saving user

        const newUser = new User({
            name, 
            email, 
            password: hashedPassword,
        })

        await newUser.save();

        // successful response
        res.status(201).json({message: 'User created successfully'});
    }
    catch(error){
        //server error
        res.status(500).json({message: 'Server error'});
    }
}

// Login User

export const loginUser = async(req, res) => {
    const {email, password} = req.body;

    try{
        // verifying user
        
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({message: 'No user found'});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({message: 'Incorrect password'});

        // creating and storing of a token

        const token = jwt.sign({
            id: user._id,
            email: user.email
        }, process.env.JWT_SECRET, {expiresIn: '7d'});

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7*24*60*60*1000
        });

        // Successful Response

        res.status(200).json({message: 'Login successful'});
    }
    catch(error){
        // server error
        res.status(500).json({message: 'Server error'});
    }
}