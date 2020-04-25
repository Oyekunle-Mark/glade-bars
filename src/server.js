const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const logger = require('morgan');

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(compression());
server.use(logger('combined'));

server.get('/', (_, res) =>
  res.status(200).json({
    statusCode: 200,
    message: 'The Bar Code API is alive and kicking!',
  }),
);

server.use('*', (_, res) =>
  res.status(404).json({
    statusCode: 404,
    message: 'No endpoint matches that URL.',
  }),
);

module.exports = {
  server,
};
