const errorAdapter = (error) => {
  const message = error.map((err) => ({
    param: err.param,
    message: err.msg,
  }));
  return message;
};

module.exports = errorAdapter;
