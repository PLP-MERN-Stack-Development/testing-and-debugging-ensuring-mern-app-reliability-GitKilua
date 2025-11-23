const { validateBug } = require('../../utils/validate');
describe('validateBug', () => {
  it('should return null for valid input', () => {
    expect(validateBug('Test Bug', 'This is a description')).toBeNull();
  });
  it('should return error for short title', () => {
    expect(validateBug('Hi', 'Valid desc')).toBe('Title must be at least 3 characters');
  });
});