const { validationResult } = require('express-validator');
const { getCodes, addCode, deleteCode } = require('./barcode.service');

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
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        statusCode: 400,
        error: errors.array(),
      });
    }

    const { dataString } = req.body;
    const code = await addCode(dataString);

    return res.status(201).json({
      statusCode: 201,
      data: code,
    });
  } catch (err) {
    return res.status(500).json({
      statusCode: 500,
      error: `Error creating QRCode: ${err}`,
    });
  }
};

const removeCode = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await deleteCode(id);

    return res.status(200).json({
      statusCode: 200,
      message,
    });
  } catch (err) {
    return res.status(404).json({
      statusCode: 404,
      error: `QR Code not found: ${err}`,
    });
  }
};

module.exports = {
  getAllCodes,
  addQRCode,
  removeCode,
};
