const router = require('express').Router();

const controllerComments = require('./controllerComments')
const controllerPosts = require('./controllerPosts');
const controllerUsers = require('./controllerUsers');

router.use('/comments', controllerComments);
router.use('/posts', controllerPosts);
router.use('/users', controllerUsers);

module.exports = router;