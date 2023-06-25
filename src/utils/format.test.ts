import { formatStringDateToDottedType, formatSecondsToTime } from './format';

test('time', () => {
  expect(formatSecondsToTime(70)).toBe('01:10');
  expect(formatSecondsToTime(20)).toBe('00:20');
  expect(formatSecondsToTime(-10)).toBe('00:00');
  expect(formatSecondsToTime(undefined)).toBe('00:00');
});

test('date', () => {
  expect(formatStringDateToDottedType('2022-11-15')).toBe('2022.11.15');
  expect(formatStringDateToDottedType('2023-07-01')).toBe('2023.07.01');
  expect(formatStringDateToDottedType('2021-11-03T17:56:55')).toBe(
    '2021.11.03',
  );
});
