const { User } = require("../models/login.model.js");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const { addComment, addReply, likeComment } = require("./userControllers.js");

const login = (req, res)=>{
    res.send("<h1>hello you are signed in</h1>");
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

        // Send back the created user
        res.status(200).json(user);
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