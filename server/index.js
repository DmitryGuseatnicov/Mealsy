const express = require('express');
const cors = require('cors');
const sequelize = require('./database/database');
const routers = require('./routers');
// eslint-disable-next-line no-unused-vars
const models = require('./models');
const errorMiddleware = require('./middleware/errorMiddleware');

const PORT = 5001;

const start = () => {
  try {
    sequelize.sync().then(() => console.log('db is connected'));
    const server = express();

    server.use(express.json());
    server.use(cors());
    server.use('/api', routers);
    server.use(errorMiddleware);

    server.listen(PORT, () => console.log(`Server working on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
