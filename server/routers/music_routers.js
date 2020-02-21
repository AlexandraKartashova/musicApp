const express = require('express');
const router = express.Router();

const music_controllers = require('../controllers/music_controller');

router.post('/create', music_controllers.music_create);
module.exports = router;