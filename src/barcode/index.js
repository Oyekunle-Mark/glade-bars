const express = require('express');
const { check } = require('express-validator');
const { addQRCode, getAllCodes, removeCode } = require('./barcode.controller');

const router = express.Router();

router.get('/codes', getAllCodes);
router.post('/codes', [check('dataString').isLength({ min: 3 })], addQRCode);
router.delete('/codes/:id', [check('id').isUUID()], removeCode);

module.exports = router;
