const express = require('express');
const { check } = require('express-validator');
const { addQRCode, getAllCodes } = require('./barcode.controller');

const router = express.Router();

router.get('/codes', getAllCodes);
router.post('/codes', [check('dataString').isLength({ min: 3 })], addQRCode);

module.exports = router;
