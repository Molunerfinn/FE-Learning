import maxSubArray from '../algorithm/max-sub-array'

test('Should return [-1] when inputing [-2,-1,-3]', () => {
  let result = maxSubArray([-2, -1, -3])
  expect(result).toEqual([-1])
})

test('Should return [1] when inputing [1]', () => {
  let result = maxSubArray([1])
  expect(result).toEqual([1])
})

test('Should return [6, 2] when inputing [-1, -2, 3, -4, 6, 2], desc', () => {
  let result = maxSubArray([-1, -2, 3, -4, 6, 2])
  expect(result).toEqual([6, 2])
})

// test('Should return [1,2,3,4,5,6,7,8,9] when inputing [1,2,3,4,5,6,7,8,9], asc', () => {
//   let result = bubbleSort([1,2,3,4,5,6,7,8,9], 'asc')
//   expect(result).toEqual([1,2,3,4,5,6,7,8,9])
// })
