const express = require('express');
const router = express.Router();
const blogPostController = require('../controllers/blogPostController');

// Get all posts
router.get('/posts', blogPostController.getAllPosts);

// Get post by id
router.get('/posts/:id', blogPostController.getPostById);

// Create a new post
router.post('/posts', blogPostController.createPost);

module.exports = router;
