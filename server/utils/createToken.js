const jwt = require('jsonwebtoken');

const createToken = (user) => {
  const { id, name, dataOfBirth, sex, mail, role } = user;
  return jwt.sign({ id, name, dataOfBirth, sex, mail, role }, '123456', {
    expiresIn: '24h',
  });
};

module.exports = createToken;
