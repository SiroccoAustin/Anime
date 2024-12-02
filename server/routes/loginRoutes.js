const express = require("express");
const {login, signUp, signOut, comments, replies, likeSection} = require("../controllers/loginInformation.js")

router = express.Router();


router.get('/login', login);

router.post('/signup', signUp);

router.get('/signout', signOut);

router.post('/comment', comments);

router.post('/comment/:commentId/reply', replies);

router.post('/comment/:commentId/like', likeSection);



module.exports = router;