const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const schema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
    
}, {timestamps: true})


schema.pre('save', async function (next){
    if (!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
})


const commentSchema = mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Infomation',
        required: false
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Infomation'
        }
    ],
    replies: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Reply'
        }
    ]
}, { timestamps: true })

const replySchema = mongoose.Schema({
    content: {
        type: String,
        required: true
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Infomation',
        required: true
      },
      comment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
        required: true
      },
      likes: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Infomation'
        }
      ]}, { timestamps: true })


schema.methods.comparePassword = async function (candidatepass){
    return await bcrypt.compare(candidatepass, this.password)
}

const User = mongoose.model('Infomation', schema);
const Comment = mongoose.model('Comment', commentSchema);
const Reply = mongoose.model('Reply', replySchema);

module.exports = {User, Comment, Reply};