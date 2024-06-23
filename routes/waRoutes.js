const express = require('express');
const {
  startBrowser,
  getQr,
  stopBrowser,
} = require('../controllers/waController');
const router = express.Router();
const {versionController} = require('../controllers/versionController');

router.get('/', versionController);
router.get('/start-browser', startBrowser);
router.get('/get-qr', getQr);
router.get('/stop-browser', stopBrowser);

module.exports = router;
