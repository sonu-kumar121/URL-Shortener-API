const express = require('express');
const { shortenUrl, getAnalytics } = require('../controllers/urlController');
const router = express.Router();

router.post('/shorten', shortenUrl);
router.get('/analytics', getAnalytics);

module.exports = router;
