const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// get all posts
router.get('/', (req, res) =>
{
    Post.findAll().then(postsData => res.json(postsData)).catch(err =>
    {
        console.log(err);
        res.status(500).json(err);
    });
});

// get post by Id
router.get('/:id', (req, res) =>
{
    Post.findOne({
        where: {
            id: req.params.id
        },
    }).then(postData =>
    {
        if (!postData)
        {
            res.status(404).json({ message: 'No post with provided Id' });
            return;
        }

        res.json(postsData);
    }).catch(err =>
    {
        console.log(err);
        res.status(500).json(err);
    });
});

// create post
router.post('/', (req, res) =>
{
    Post.create({
        title: req.body.title,
        body: req.body.body,
        date: req.body.date,
        userId: req.session.user_id
    }).then(postData => res.json(postData)).catch(err =>
    {
        console.log(err);
        res.status(500).json(err);
    });
});

// update post by id
router.put('/:id', (req, res) =>
{
    Post.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(postData =>
    {
        if (!postData)
        {
            res.status(404).json({ message: 'No post with provided Id' });
            return;
        }

        res.json(postData);
    }).catch(err =>
    {
        console.log(err);
        res.status(500).json(err);
    });
});

// delete post by id
router.delete('/:id', (req, res) =>
{
    Post.destroy({
        where: {
            id: req.params.id
        }
    }).then(postData =>
    {
        if (!postData)
        {
            res.status(404).json({ message: 'No post with provided Id' });
            return;
        }

        res.json(postData);
    }).catch(err =>
    {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;