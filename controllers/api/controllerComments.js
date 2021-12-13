const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// get all comments
router.get('/', (req, res) =>
{
    Comment.findAll().then(commentsData => res.json(commentsData)).catch(err =>
    {
        console.log(err);
        res.status(500).json(err);
    });
});

// get comment by Id
router.get('/:id', (req, res) =>
{
    Comment.findOne({
        where: {
            id: req.params.id
        },
    }).then(commentData =>
    {
        if (!commentData)
        {
            res.status(404).json({ message: 'No comment with provided Id' });
            return;
        }

        res.json(commentsData);
    }).catch(err =>
    {
        console.log(err);
        res.status(500).json(err);
    });
});

// create comment
router.post('/', (req, res) =>
{
    Comment.create({
        commentText: req.params.body
    }).then(commentData => res.json(commentData)).catch(err =>
    {
        console.log(err);
        res.status(500).json(err);
    });
});

// update comment by id
router.put('/:id', (req, res) =>
{
    Comment.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(commentData =>
    {
        if (!commentData)
        {
            res.status(404).json({ message: 'No comment with provided Id' });
            return;
        }

        res.json(commentData);
    }).catch(err =>
    {
        console.log(err);
        res.status(500).json(err);
    });
});

// delete comment by id
router.delete('/:id', (req, res) =>
{
    Comment.destroy({
        where: {
            id: req.params.id
        }
    }).then(commentData =>
    {
        if (!commentData)
        {
            res.status(404).json({ message: 'No comment with provided Id' });
            return;
        }

        res.json(commentData);
    }).catch(err =>
    {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;