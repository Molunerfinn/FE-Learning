import dayOfWeek from '../algorithm/day-of-week'

test('Should return Sunday when inputing 20171028', () => {
  let result = dayOfWeek('20171028')
  expect(result).toBe('Saturday')
})

test('Should return Tuesday when inputing 20170103', () => {
  let result = dayOfWeek('20170103')
  expect(result).toBe('Tuesday')
})

test('Should return Wednesday when inputing 20171101', () => {
  let result = dayOfWeek('20171101')
  expect(result).toBe('Wednesday')
})
