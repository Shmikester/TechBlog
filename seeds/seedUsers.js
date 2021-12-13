const { User } = require('../models');

const userData = [
    {
        username: 'TurkeyGuy',
        email: 'turkey@november.com',
        password: 'as1212312453qwrdf'
    },
    {
        username: 'ChickenGal',
        email: 'chicken@allthetime.com',
        password: 'qwer'
    },
    {
        username: 'SpamALot',
        email: 'not@camalot.com',
        password: 'holy'
    },
    {
        username: 'Tired',
        email: 'sleepy@time.com',
        password: 'snore'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;