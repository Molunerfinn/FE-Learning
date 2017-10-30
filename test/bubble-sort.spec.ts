import bubbleSort from '../algorithm/bubble-sort'

test('Should return [1,2,3,4,5,6,7,8,9] when inputing [2,3,4,1,6,7,8,5,9]', () => {
  let result = bubbleSort([2,3,4,1,6,7,8,5,9])
  expect(result).toEqual([1,2,3,4,5,6,7,8,9])
})

test('Should return [9,8,7,6,5,4,3,2,1] when inputing [2,3,4,1,6,7,8,5,9], desc', () => {
  let result = bubbleSort([2,3,4,1,6,7,8,5,9], 'desc')
  expect(result).toEqual([9,8,7,6,5,4,3,2,1])
})

test('Should return [1,2,3,4,5,6,7,8,9] when inputing [1,2,3,4,5,6,7,8,9], asc', () => {
  let result = bubbleSort([1,2,3,4,5,6,7,8,9], 'asc')
  expect(result).toEqual([1,2,3,4,5,6,7,8,9])
})
