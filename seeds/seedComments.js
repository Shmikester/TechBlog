const { modelComment } = require('../models');

const commentData = [
    {
        commentText: 'I like turkey',
        postId: 1,
        userId: 1
    },
    {
        commentText: 'I like chicken',
        postId: 2,
        userId: 2
    },
    {
        commentText: 'Spam is nasty',
        postId: 3,
        userId: 3
    },
    {
        commentText: 'Veggies are a necessary evil',
        postId: 4,
        userId: 4
    },
    {
        commentText: 'J/K, busy work sucks',
        postId: 5,
        userId: 1
    },
];

const seedComment = () => modelComment.bulkCreate(commentData);

module.exports = seedComment;