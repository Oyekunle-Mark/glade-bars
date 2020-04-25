const QRCode = require('qrcode');
const { v4 } = require('uuid');
let codeData = require('./barcode.data');

const getCodes = () => Promise.resolve(codeData);

