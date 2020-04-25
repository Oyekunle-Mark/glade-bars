const { getCodes, addCode } = require('./barcode.service');

const getAllCodes = async (req, res) => {
  try {
    const codes = await getCodes();

    return res.status(200).json({
      statusCode: 200,
      data: codes,
    });
  } catch (err) {
    return res.status(500).json({
      statusCode: 500,
      error: `Error getting QRCodes: ${err}`,
    });
  }
};

const addQRCode = async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json({
      statusCode: 500,
      error: `Error creating QRCode: ${err}`,
    });
  }
};

module.exports = {
  getAllCodes,
  addQRCode,
};
