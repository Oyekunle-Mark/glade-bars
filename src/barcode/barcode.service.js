const QRCode = require('qrcode');
const { v4 } = require('uuid');
let codeData = require('./barcode.data');

const getCodes = () => Promise.resolve(codeData);

const addCode = async (inputStr) => {
  const newCode = {
    id: v4(),
  };

  return new Promise((resolve, reject) => {
    QRCode.toDataURL(inputStr, (err, url) => {
      if (err) reject(err);

      newCode.codeUrl = url;
      codeData = [...codeData, newCode];
      resolve(newCode);
    });
  });
};
