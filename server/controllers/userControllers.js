const {Comment, User, Reply} = require("../models/login.model.js")
const mongoose = require("mongoose");

const addComment = async (userId, content)=>{
    const comment = new Comment({
        content: content,
        user: userId
    })
    await comment.save();
}

const addReply = async(content, commentId, userId)=>{
    const reply = new User.Reply({
        content: content,
        user: userId,
        comment: commentId
    });
    await reply.save();

    const comment = await Comment.findbyId(commentId);
    comment.replies.push(reply,id);
    await comment.save();
}

const likeComment = async (userId, commentId) => {
    const comment = await Comment.findById(commentId);
    
    
    if (!comment.likes.includes(userId)) {
      comment.likes.push(userId);
      await comment.save();
    }
  };
  
  const likeReply = async (userId, replyId) => {
    const reply = await Comment.findById(replyId);
    
    // Check if the user already liked the comment
    if (!reply.likes.includes(userId)) {
      reply.likes.push(userId);
      await reply.save();
    }
  };
  

module.exports = {addComment, addReply, likeComment, likeReply}