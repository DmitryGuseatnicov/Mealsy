const paginationMiddleware = (req, res, next) => {
  // eslint-disable-next-line prefer-const
  let { page, size, ...query } = req.query;

  if (Number.isNaN(Number(page))) {
    page = 1;
  }
  if (Number.isNaN(Number(size))) {
    size = 20;
  }

  req.pagination = {
    limit: size,
    offset: size * (page - 1),
  };
  req.query = query;
  next();
};

module.exports = paginationMiddleware;
