import calcDate from '../algorithm/calc-date'

test('Should return 0 when inputing 20170101 20170101', () => {
  let result = calcDate('20170101', '20170101')
  expect(result).toEqual(0)
})

test('Should return 2 when inputing 20170103 20170101', () => {
  let result = calcDate('20170103', '20170101')
  expect(result).toEqual(2)
})

test('Should return 3 when inputing 20170101 20170104', () => {
  let result = calcDate('20170101', '20170104')
  expect(result).toEqual(3)
})
