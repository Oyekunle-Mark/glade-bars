const QRCode = require('qrcode');
const { v4 } = require('uuid');
let codeData = require('./barcode.data');

const getCodes = () => Promise.resolve(codeData);

const addCode = async (inputStr) => {
  const newCode = {
    id: v4(),
    title: inputStr,
  };

  return new Promise((resolve, reject) => {
    QRCode.toDataURL(inputStr, (err, url) => {
      if (err) reject(err);

      newCode.code = url;
      codeData = [...codeData, newCode];
      resolve(newCode);
    });
  });
};

module.exports = {
  getCodes,
  addCode,
};
