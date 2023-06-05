const axios = require('axios');

const blogApiKey = process.env.BLOG_API_KEY;
const blogId = process.env.BLOG_ID; 

const getAllPosts = async (req, res) => {
    try {
        const maxResults = 5;
        const response = await axios.get(
          `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${blogApiKey}&maxResults=${maxResults}`
        );
        const posts = response.data.items;
        return res.status(200).json({
          status: 'Success',
          message: 'Data retrieved successfully!',
          data: posts,
        });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
};

const getPostById = async (req, res) => {
    try {
      const postId = req.params.id;
      const response = await axios.get(
        `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts/${postId}?key=${blogApiKey}`
      );
      const post = response.data;
      return res.status(200).json({
        status: 'Success',
        message: 'Data retrieved successfully!',
        data: post,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

module.exports = {
    getAllPosts,
    getPostById
}