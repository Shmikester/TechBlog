const router = require('express').Router();
const { modelUser } = require('../../models');
const withAuth = require('../../utils/auth');

// gets all users
router.get('/', (req, res) =>
{
    modelUser.findAll({
        attributes: { exclude: ['password'] }
    }).then(usersData => res.json(usersData)).catch(err =>
    {
        console.log(err);
        res.status(500).json(err);
    });
});

// get user by id
router.get('/:id', (req, res) =>
{
    modelUser.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        }
    }).then(userData =>
    {
        if (!userData)
        {
            res.status(404).json({ message: 'No user with provided Id' });
            return;
        }
        res.json(userData);
    }).catch(err =>
    {
        console.log(err);
        res.status(500).json(err);
    });
});

// signup user
router.post('/signup', (req, res) =>
{
    modelUser.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }).then(userData =>
    {
        req.session.save(() =>
        {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.loggedIn = true;

            res.json(userData);
        });
    }).catch(err =>
    {
        console.log(err);
        res.status(500).json(err);
    });
});

//login user
router.post('/login', (req, res) =>
{
    modelUser.findOne({
        where: {
            email: req.body.email
        }
    }).then(userData =>
    {
        if (!userData)
        {
            res.status(400).json({ message: 'No user with provided email' });
            return;
        }

        const validPassword = userData.checkPass(req.body.password);

        if (!validPassword)
        {
            res.status(400).json({ message: 'Invalid Password' });
            return;
        }

        req.session.save(() =>
        {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.loggedIn = true;

            res.json({ user: userData, message: 'Logged In' });
        });
    }).catch(err =>
    {
        console.log(err);
        res.status(500).json(err);
    });
});

//logout user
router.post('/logout', (req, res) =>
{
    if (req.session.loggedIn)
    {
        req.session.destroy(() =>
        {
            res.status(204).end();
        });
    }
    else
    {
        res.status(404).end();
    }
});

//update user by id
router.put('/:id', (req, res) =>
{
    modelUser.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    }).then(userData =>
    {
        if (!userData)
        {
            res.status(404).json({ message: 'No user with provided Id' });
            return;
        }

        res.json(userData);
    }).catch(err =>
    {
        console.log(err);
        res.status(500).json(err);
    });
});

// delete user by id
router.delete('/:id', (req, res) =>
{
    modelUser.destroy({
        where: {
            id: req.params.id
        }
    }).then(userData =>
    {
        if (!userData)
        {
            res.status(404).json({ message: 'No user with provided Id' });
            return;
        }

        console.log('User deleted');
        res.json(userData);
    }).catch(err =>
    {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;