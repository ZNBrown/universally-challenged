const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());



const allRoutes = require('./routes/route')

server.use('/main',allRoutes)

server.get('/', (req, res) => res.send('Empty server is up and running'))

module.exports = server