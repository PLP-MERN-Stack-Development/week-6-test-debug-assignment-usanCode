

const formatDate = require('../../src/utils/formatDate');

describe('formatDate', () => {
  it('should format a date string to "MMM DD, YYYY"', () => {
    const result = formatDate('2023-05-01');
    expect(result).toBe('May 1, 2023');
  });

  it('should return "Invalid Date" if the input is invalid', () => {
    const result = formatDate('not-a-date');
    expect(result).toBe('Invalid Date');
  });

  it('should format a Date object correctly', () => {
    const result = formatDate(new Date('2022-01-01'));
    expect(result).toBe('Jan 1, 2022');
  });
});
