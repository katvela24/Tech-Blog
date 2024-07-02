const router = require('express').Router();
// Import the blog model from the models folder
const { Blog } = require('../../models');

// If a POST request is made to /api/blog, a new blog is created. If there is an error, the function returns with a 400 error. 
router.post('/', async (req, res) => {
  console.log(req.body)
  try {
    const newBlog = await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    console.log(newBlog)

    res.status(200).json(newBlog);
  } catch (err) {
    console.log(err)
    
    res.status(400).json(err);
  }
});

// If a DELETE request is made to /api/blog/:id, that blog is deleted. 
router.delete('/:id', async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: 'No blogfound with this id!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
