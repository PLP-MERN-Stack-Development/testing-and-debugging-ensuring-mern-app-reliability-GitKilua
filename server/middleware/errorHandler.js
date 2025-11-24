const errorHandler = (err, req, res, next) => {
  console.error('Global error:', err); // Debugging log
  res.status(500).json({ error: 'Internal server error' });
};

module.exports = errorHandler;