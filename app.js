const express = require('express');
const app = express();
const port = 3001;

// Parse JSON data in the request body
app.use(express.json());

// Import the blog APIs from the blog.js file
const blogRoutes = require('./routes/blog');

// Use the blog APIs under the '/api' route
app.use('/api', blogRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
