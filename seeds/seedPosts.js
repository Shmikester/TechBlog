const { modelPost } = require('../models');

const postData = [
    {
        title: 'Turkey and you',
        body: 'What is your opinion of turkey?',
        date: '',
        userId: 1
    },
    {
        title: 'Chicken and you',
        body: 'What is your opinion of chicken?',
        date: '',
        userId: 2
    },
    {
        title: 'Spam and you',
        body: 'What is your opinion of spam?',
        date: '',
        userId: 3
    },
    {
        title: 'Veggies and you',
        body: 'What is your opinion of veggies?',
        date: '',
        userId: 4
    },
    {
        title: 'Busy work is the best',
        body: 'Wouldn\'t you agree?',
        date: '',
        userId: 1
    },
];

const seedPost = () => modelPost.bulkCreate(postData);

module.exports = seedPost;