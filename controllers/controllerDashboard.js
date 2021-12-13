const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');

// get all posts by user
router.get('/', (req, res) =>
{
    Post.findAll({
        where: {
            userId: req.session.user_id
        }
    }).then(data =>
    {
        const posts = data.map(postsData => postsData.get({ plain: true }));
        res.render('dashboard', {
            posts,
            loggedIn: req.session.loggedIn,
            dashboardLoggedIn: req.session.loggedIn,
            dashboardUser: req.session.username
        });
    }).catch(err =>
    {
        console.log(err);
        res.status(500).json(err);
    });
});

// add a post
router.get('/addpost', withAuth, (req, res) =>
{
    res.render('addpost', {
        loggedIn: req.session.loggedIn,
        dashboardLoggedIn: req.session.loggedIn,
        dashboardUser: req.session.username
    });
});

// edit post by id
router.get('/editpost/:id', withAuth, (req, res) =>
{
    Post.findAll({
        where: {
            id: req.params.id
        }
    }).then(data =>
    {
        const post = data.map(postsData => postsData.get({ plain: true }));
        res.render('editpost', {
            post,
            loggedIn: req.session.loggedIn,
            dashboardLoggedIn: req.session.loggedIn,
            dashboardUser: req.session.username
        });
    }).catch(err =>
    {
        console.log(err);
        res.status(500).json(err);
    });
});

// profile
router.get('/profile', withAuth, (req, res) =>
{
    res.render('profile', {
        loggedIn: req.session.loggedIn
    })
});

module.exports = router;