import * as op from '../design-pattern/observer-pattern'

let observer = new op.Observer('click')
let subjects = new op.Subject()
subjects.add('click', observer)
subjects.remove('click', observer)
subjects.fire('click')
console.log(observer.subject)

// let a: any = {}

// if (!a['click']) {
//   a['click'] = 1
//   console.log(a)
// }

// test('Should fire observer as expected', () => {
// })

// test('Should return Sunday when inputing 20171028', () => {
//   let result = dayOfWeek('20171028')
//   expect(result).toBe('Saturday')
// })

// test('Should return Tuesday when inputing 20170103', () => {
//   let result = dayOfWeek('20170103')
//   expect(result).toBe('Tuesday')
// })

// test('Should return Wednesday when inputing 20301106', () => {
//   let result = dayOfWeek('20301106')
//   expect(result).toBe('Wednesday')
// })
