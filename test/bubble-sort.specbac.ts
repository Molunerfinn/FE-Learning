import { expect } from 'chai'
import bubbleSort from '../algorithm/bubble-sort'

describe('BubbleSort', () => {
  it('Should return [1,2,3,4,5,6,7,8,9] when inputing [2,3,4,1,6,7,8,5,9]', () => {
    let result = bubbleSort([2,3,4,1,6,7,8,5,9])
    expect(result).to.deep.equal([1,2,3,4,5,6,7,8,9])
  })
  it('Should return [9,8,7,6,5,4,3,2,1] when inputing [2,3,4,1,6,7,8,5,9], desc', () => {
    let result = bubbleSort([2,3,4,1,6,7,8,5,9], 'desc')
    expect(result).to.deep.equal([9,8,7,6,5,4,3,2,1])
  })
  it('Should return [1,2,3,4,5,6,7,8,9] when inputing [1,2,3,4,5,6,7,8,9], asc', () => {
    let result = bubbleSort([1,2,3,4,5,6,7,8,9], 'asc')
    expect(result).to.deep.equal([1,2,3,4,5,6,7,8,9])
  })
  it('Should return a array when inputing [1,2,3,4,5,6,7,8,9], asc', () => {
    let result = bubbleSort([1,2,3,4,5,6,7,8,9], 'asc')
    expect(result).to.be.an('array')
  })
})
