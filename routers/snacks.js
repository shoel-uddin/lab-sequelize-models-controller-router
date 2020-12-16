const express = require('express');
const router = express.Router();

const controller = require('../controllers/snacks');

router.get('/', controller.list)
    .get('/new', controller.showForm)
    .post('/new', controller.processForm)

module.exports = router;
