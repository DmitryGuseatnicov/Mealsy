const uuid = require('uuid');
const path = require('path');

const createFilePath = (req) => {
  const { img } = req.files ? req.files : {};
  const fileName = `${uuid.v4()}.jpg`;

  if (img) {
    img.mv(path.resolve(__dirname, '..', 'static', fileName));
    return `${req.protocol}://${req.get('host')}/${fileName}`;
  }

  return '';
};

module.exports = createFilePath;
