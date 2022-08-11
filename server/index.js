const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const fileUpload = require('express-fileupload');
const path = require('path');

const sequelize = require('./database/database');
const routers = require('./routers');
// eslint-disable-next-line no-unused-vars
const models = require('./models');
const errorMiddleware = require('./middleware/errorMiddleware');

const PORT = 5001;

const start = () => {
  try {
    sequelize.sync().then(async () => {
      /* const { User } = models;
      const password = await bcrypt.hash('admin123', 5);
      User.create({
        name: 'admin',
        mail: 'admin@mail.ru',
        password,
        role: 'admin',
      }); */
    });
    const server = express();

    server.use(express.json());
    server.use(express.static(path.resolve(__dirname, 'static')));
    server.use(fileUpload({}));
    server.use(cors());
    server.use('/api', routers);
    server.use(errorMiddleware);

    server.listen(PORT, () => console.log(`Server working on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
