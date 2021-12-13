const router = require('express').Router();
const sequelize = require('../connection/sqlConnection');
const { modelPost, modelComment } = require('../models');

// get posts for homepage
router.get('/', (req, res) =>
{
    modelPost.findAll().then(postData =>
    {
        const posts = postData.map(postsData => postsData.get({ plain: true }));
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn
        });
    }).catch(err =>
    {
        console.log(err);
        res.status(500).json(err);
    });
});

// login page
router.get('/login', (req, res) =>
{
    if (req.session.loggedIn)
    {
        res.redirect('/');
        return;
    }
    res.render('login');
});

// signup page
router.get('/signup', (req, res) =>
{
    if (req.session.loggedIn)
    {
        res.redirect('/');
        return;
    }
    res.render('signup');
});

//get post by id
router.get('/post/:id', (req, res) =>
{
    modelPost.findAll({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: modelComment,
                where: {
                    id: req.params.id
                }
            }
        ]
    })
        .then(data =>
        {
            const comments = data.map(commentsData => commentsData.get({ plain: true }));
            res.render('comments', {
                comments,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err =>
        {
            console.log(err);
            res.status(500).json(err);
        })
});

module.exports = router;