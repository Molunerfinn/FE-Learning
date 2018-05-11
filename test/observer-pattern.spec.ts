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

test('Should fire different observers as expected', () => {
  let observer1 = new op.Observer('click')
  let observer2 = new op.Observer('hover')
  let subjects = new op.Subject()
  subjects.add('click', observer1)
  subjects.add('hover', observer2)
  subjects.fire('click')
  expect(observer1.subject).toBe('Done')
  expect(observer2.subject).toBe('hover')
})

test('Should remove observer as expected', () => {
  let observer = new op.Observer('click')
  let subjects = new op.Subject()
  subjects.add('click', observer)
  subjects.remove('click', observer)
  subjects.fire('click')
  expect(observer.subject).toBe('click')
})
