import { formatTime } from './format';

test('time', () => {
  expect(formatTime(70)).toBe('01:10');
  expect(formatTime(20)).toBe('00:20');
  expect(formatTime(-10)).toBe('00:00');
  expect(formatTime(undefined)).toBe('00:00');
});
