const convertStrArrParams = (param) => {
  return typeof param === 'string' ? JSON.parse(param) : param;
};

module.exports = convertStrArrParams;
