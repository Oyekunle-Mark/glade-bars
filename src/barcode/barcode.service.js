const QRCode = require('qrcode');
const { v4 } = require('uuid');
let codeData = require('./barcode.data');

const getCodes = () => Promise.resolve(codeData);

const addCode = (inputStr) => {
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

const deleteCode = (codeId) => {
  const codeToRemove = codeData.find((code) => code.id === codeId);

  return new Promise((resolve, reject) => {
    if (!codeToRemove) reject(new Error('No QR Code matches that ID!'));

    codeData = codeData.filter((code) => code.id !== codeId);
    resolve(`QR Code ${codeToRemove.id} deleted successfully.`);
  });
};

module.exports = {
  getCodes,
  addCode,
  deleteCode,
};
