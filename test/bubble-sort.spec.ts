import { expect } from 'chai'
import bubbleSort from '../algorithm/bubble-sort'

describe('BubbleSort', () => {
  it('Should return [1,2,3,4,5,6,7,8,9] when inputing [2,3,4,1,6,7,8,5,9]', () => {
    let result = bubbleSort([2,3,4,1,6,7,8,5,9])
    expect(result).to.have.ordered.members([1,2,3,4,5,6,7,8,9])
  })
})
