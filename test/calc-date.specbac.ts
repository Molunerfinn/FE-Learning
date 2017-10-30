import { expect } from 'chai'
import calcDate from '../algorithm/calc-date'

describe('BubbleSort', () => {
  it('Should return 0 when inputing 20170101 20170101', () => {
    let result = calcDate('20170101', '20170101')
    expect(result).to.equal(0)
  })

  it('Should return 2 when inputing 20170103 20170101', () => {
    let result = calcDate('20170103', '20170101')
    expect(result).to.equal(2)
  })

  it('Should return 3 when inputing 20170101 20170104', () => {
    let result = calcDate('20170101', '20170104')
    expect(result).to.equal(3)
  })
})
