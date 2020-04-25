const express = require('express');
const { addQRCode, getAllCodes } = require('./barcode.controller');

const router = express.Router();

router.get('/', getAllCodes);
router.post('/', addQRCode);

module.exports = router;
