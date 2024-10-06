const { solution } = require('./solution')

const testCases = [
  { input: '()', expected: true },
  { input: '()[]{}', expected: true },
  { input: '(]', expected: false },
  { input: '([])', expected: true },
]

describe(`Solution Tests`, () => {
  testCases.forEach(({ input, expected }, idx) => {
    test(`Example ${idx + 1}`, () => {
      expect(solution(input)).toEqual(expected)
    })
  })
})
