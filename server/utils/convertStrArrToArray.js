const convertStrArrParams = (param) => {
  /* if (typeof param === 'string') {
    return JSON.parse(param);
  }
  return param; */
  return typeof param === 'string' ? JSON.parse(param) : param;

};

module.exports = convertStrArrParams;
