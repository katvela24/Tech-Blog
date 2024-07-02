const router = require('express').Router();
// Import the Project model from the models folder
const { Blog } = require('../../models');

// If a POST request is made to /api/projects, a new project is created. If there is an error, the function returns with a 400 error. 
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

// If a DELETE request is made to /api/projects/:id, that project is deleted. 
router.delete('/:id', async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
