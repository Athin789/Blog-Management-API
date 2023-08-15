const express = require('express');
const blogRouter = express.Router();

// Sample data
let postsData = [
  { id: 1, title: 'Animal Post', content: 'This is an animal blog post.' },
  { id: 2, title: 'Plant Post', content: 'This is a plant blog post.' },
];

// API to get all blog posts
blogRouter.get('/posts', (req, res) => {
  res.json(postsData);
});

// API to get a specific blog post by ID
blogRouter.get('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = postsData.find((post) => post.id === postId);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: 'Post not found.' });
  }
});

// API to create a new blog post
blogRouter.post('/posts', (req, res) => {
  const { title, content } = req.body;
  const newPost = { id: postsData.length + 1, title, content };
  postsData.push(newPost);
  res.status(201).json(newPost);
});

// API to update an existing blog post
blogRouter.put('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const { title, content } = req.body;
  const postIndex = postsData.findIndex((post) => post.id === postId);
  if (postIndex !== -1) {
    postsData[postIndex] = { id: postId, title, content };
    res.json(postsData[postIndex]);
  } else {
    res.status(404).json({ message: 'Post not found.' });
  }
});

// API to delete a blog post
blogRouter.delete('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  postsData = postsData.filter((post) => post.id !== postId);
  res.status(204).send();
});

module.exports = blogRouter;
