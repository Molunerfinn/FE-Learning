import * as op from '../design-pattern/observer-pattern'

test('Should fire observer as expected', () => {
  let observer = new op.Observer('click')
  let subjects = new op.Subject()
  subjects.add('click', observer)
  subjects.fire('click')
  expect(observer.subject).toBe('Done')
})

test('Should fire observers as expected', () => {
  let observer1 = new op.Observer('click')
  let observer2 = new op.Observer('click')
  let subjects = new op.Subject()
  subjects.add('click', observer1)
  subjects.add('click', observer2)
  subjects.fire('click')
  expect(observer1.subject).toBe('Done')
  expect(observer2.subject).toBe('Done')
})

test('Should remove observer as expected', () => {
  let observer = new op.Observer('click')
  let subjects = new op.Subject()
  subjects.add('click', observer)
  subjects.remove('click', observer)
  subjects.fire('click')
  expect(observer.subject).toBe('click')
})

// let a: any = {}

// if (!a['click']) {
//   a['click'] = 1
//   console.log(a)
// }

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
