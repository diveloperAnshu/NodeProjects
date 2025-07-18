const express = require('express');
const router = express.Router();

let blogPost = [
    {
        id: 1, 
        text : "you are a good person",
        likes : 1
    },
    {
        id : 2,
        text : "you are cute",
        likes : 2
    }
];

let blogsId = 3;


// the below code is for viewing all the blogs at once;
router.get("/", (req, res) => {
    res.status(200).json(blogPost);
});


// add a new blog to the existing one
router.post("/", (req, res) => {
    const newText = req.body.text;
    if(!newText) {
        res.status(400).json({
            message : "No text in the blog",
        });
    } else {
        const newBlog = {
            id : blogsId++,
            text : newText,
            likes : 0
        }

        blogPost.push(newBlog);
        res.status(200).json({
            message : "Your new blog has been added to the blog list"
        });
    } 
});

// update an existing blog post
router.patch("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const findId = blogPost.find(t => t.id === id);
    if(!findId) {
        res.status(400).json({
            message : "blog with the provided id is not present in the blogPost!"
        });
    } else {
        const textBody = req.body.text;
        const likeBody = parseInt(req.body.likes);
        if(textBody !== undefined) {
            findId.text = textBody;
        }
        if(likeBody !== undefined) {
            findId.likes = findId.likes + likeBody
        }
        res.status(201).json({
            message : "The blogPost has been Updated!"
        });
    }
});

// delete a blogPost which is existing

router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const findId = blogPost.findIndex(t => t.id === id);
    if(findId === -1) {
        res.status(400).json({
            message : "The blog requested is not present in the blogPost!"
        });
    } else {
        blogPost.splice(findId, 1);
        res.status(204).json({
            message : "deleted"
        });
    }
})


module.exports = router;