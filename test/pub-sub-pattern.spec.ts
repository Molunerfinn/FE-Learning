import pubSub from '../design-pattern/pub-sub-pattern'

test('Should emit event as expected', () => {
  pubSub.on('click', (val) => {
    expect(val).toBe('click')
  })
  pubSub.emit('click', 'click')
})

test('Should remove observer as expected', () => {
  const mockFn = jest.fn()
  pubSub.on('click', mockFn)
  pubSub.off('click')
  pubSub.emit('click')
  expect(mockFn.mock.calls.length).toBe(0)
})

test('Should remove observer as expected', () => {
  const mockFn = jest.fn()
  pubSub.on('click', mockFn)
  pubSub.off('click', mockFn)
  pubSub.emit('click')
  expect(mockFn.mock.calls.length).toBe(0)
})
