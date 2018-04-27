const sleep = require('sleep-promise')
const rateLimitFunc = require('./index')

describe('rateLimitFunc', function () {
  it('should limit functions by given rate', async () => {
    const wrapFunc = rateLimitFunc({
      interval: 100,
      count: 2
    })

    const records = []

    let func1 = wrapFunc((arg) => records.push(arg))
    let func2 = wrapFunc((arg) => records.push(arg + arg))
    let func3 = wrapFunc(arg => records.push(arg * arg))

    func1(1)
    func2(2)
    func3(3)
    func1(4)
    func2(5)
    func3(6)

    await sleep(100)
    expect(records).toEqual([1, 4])
    await sleep(100)
    expect(records).toEqual([1, 4, 9, 4])
    await sleep(100)
    expect(records).toEqual([1, 4, 9, 4, 10, 36])
  })
})