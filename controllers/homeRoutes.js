const router = require('express').Router();
const Blog = require('../models/Blog');
// const { Project, User } = require('../models');
// const withAuth = require('../utils/auth');


// this is the main route, local host 3001
router.get('/', async (req, res) => {
  try {
   const blogs = await Blog.findAll()
   console.log(blogs)
    // Show the homepage.handlebars file
    const blogData = blogs.map((blog) => blog.get({plain:true}))
    res.render('homepage', { 
    blogs: blogData
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/dashboard', async (req, res) => {
  try {
   
    // Show the homepage.handlebars file
    res.render('dashboard', { 
    
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', async (req, res) => {
  try {
   
    // Show the homepage.handlebars file
    res.render('signup', { 
    
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If logged in, redirect the request to a different route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
