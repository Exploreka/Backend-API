const db = require("../models");
const Blog_post = db.blog_posts;

// Get all posts
const getAllPosts = async (req, res) => {
    try {
      const blog_post = await Blog_post.findAll();
      return res.status(200).json({status: 'Success', message: 'Data retrieved successfully!', data: blog_post});
    } catch (e) {
      console.log(e);
      }
  };

// Get post by ID
const getPostById = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
      const blog_post = await Blog_post.findByPk(id);
      if (blog_post) {
        return res.status(200).json({status: 'Success', message: 'Data retrieved successfully!', data: blog_post.toJSON() });
      } else {
        console.log('Post not found');
        res.status(404).json({ error: 'Post not found' });
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  const createPost = async (req, res) => {
    const {image, headline, content} = req.body;
    try {
      const newPost = await Blog_post.create({
        image_post: image,
        headline_post: headline,
        content_post: content,
      });
      res.status(201).json({ status: 'Success', message: 'New post has been created!', data: newPost.toJSON() });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  module.exports = {
    getAllPosts,
    getPostById,
    createPost,
  };