import { stringDateToDottedFormat, formatTime } from './format';

test('time', () => {
  expect(formatTime(70)).toBe('01:10');
  expect(formatTime(20)).toBe('00:20');
  expect(formatTime(-10)).toBe('00:00');
  expect(formatTime(undefined)).toBe('00:00');
});

test('date', () => {
  expect(stringDateToDottedFormat('2022-11-15')).toBe('2022.11.15');
  expect(stringDateToDottedFormat('2023-07-01')).toBe('2023.07.01');
  expect(stringDateToDottedFormat('2021-11-03T17:56:55')).toBe('2021.11.03');
});
