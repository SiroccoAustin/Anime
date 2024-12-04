const { User } = require("../models/login.model.js");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
const { addComment, addReply, likeComment } = require("./userControllers.js");

const login = async (req, res)=>{
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if (!user){
            return res.status(404).json({message: "User not found"})
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match){
            res.status(404).json({message: "Credential not valid"});
        }
        const token = jwt.sign(
            {id: user._id, email: user.email},
            process.env.JWT_SECRET, 
            { expiresIn: '1h'}
        )
        res.json({token});
        
    } catch (error) {
        res.status(401).json({message: "Invalid Token"});
    }
}

// Verify tokens

const VerifyToken = (req, res, next)=>{
    const token = req.headers.authorization?.split(" ")[1];
    if (!token){
        return res.status(403).json({message: "No token provided"});
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({message: "Invalid toekn"});
    }
}

const signUp = async (req, res)=>{
    const {username, email, password} = req.body;

    try {
        // Hash the password before saving the user
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create the user with the hashed password
        const user = await User.create({
            username,
            email,
            password: hashedPassword
        });
        await user.save();
        // Send back the created user
        res.status(200).json({message: "The user was successfully created!"});
    } catch (error) {
        // Catch any errors and send an error response
        res.status(400).json({ error: error.message });
    }
}

const signOut = async (req, res)=>{
    res.send("<h1>you have sucessfully signed out</h1>")
}

const comments = async (req, res)=>{
    const { user, content } = req.body;
    await addComment(user, content);
    res.send("Comment was added")
}

const replies = async (req, res)=>{
    const { content, userId } = req.body;
    const { commentId } = req.params;
    await addReply(content, commentId, userId);
    res.send("new reply added");

}

const likeSection = async (req, res)=>{
    const { userId } = req.body;
    const { commentId } = req.params;
    await likeComment(userId, commentId);
    res.send("Like comment");
}

module.exports = {login, signUp, signOut, comments, replies, likeSection};