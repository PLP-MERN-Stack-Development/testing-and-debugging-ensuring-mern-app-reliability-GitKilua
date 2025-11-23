const validateBug = (title, description) => {
  if (!title || title.length < 3) return 'Title must be at least 3 characters';
  if (!description || description.length < 10) return 'Description must be at least 10 characters';
  return null; // Valid
};
module.exports = { validateBug };