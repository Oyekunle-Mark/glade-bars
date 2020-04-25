const { getCodes, addCode } = require('./barcode.service');

const getAllCodes = async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json({
      statusCode: 500,
      error: `Error getting QRCodes: ${err}`,
    });
  }
};

const addCode = async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json({
      statusCode: 500,
      error: `Error creating QRCode: ${err}`,
    });
  }
};
