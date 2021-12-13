const router = require('express').Router();

const api = require('./api/');
const controllerHome = require('./controllerHome.js');
const controllerDashboard = require('./controllerDashboard.js');

router.use('/api', api);
router.use('/', controllerHome);
router.use('/dashboard', controllerDashboard);

module.exports = router;