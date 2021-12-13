const router = require('express').Router();
const { modelComment } = require('../../models');
const withAuth = require('../../utils/auth');

// get all comments
router.get('/', (req, res) =>
{
    modelComment.findAll().then(commentsData => res.json(commentsData)).catch(err =>
    {
        console.log(err);
        res.status(500).json(err);
    });
});

// get comment by Id
router.get('/:id', (req, res) =>
{
    modelComment.findOne({
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
    modelComment.create({
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
    modelComment.update(req.body, {
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
    modelComment.destroy({
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