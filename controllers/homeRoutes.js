const router = require('express').Router();
// const { Project, User } = require('../models');
// const withAuth = require('../utils/auth');


// this is the main route, local host 3001
router.get('/', async (req, res) => {
  try {
   
    // Shows the homepage.handlebars file
    res.render('homepage', { 
    
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/dashboard', async (req, res) => {
  try {
   
    // Shows the homepage.handlebars file
    res.render('dashboard', { 
    
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// router.get('/project/:id', async (req, res) => {
//   try {
//     const projectData = await Project.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const project = projectData.get({ plain: true });

//     res.render('project', {
//       ...project,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/profile');
//     return;
//   }

//   res.render('login');
// });

module.exports = router;
