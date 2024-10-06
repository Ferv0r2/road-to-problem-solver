const { solution } = require('./solution')

const testCases = [
  { input: 3, expected: ['((()))', '(()())', '(())()', '()(())', '()()()'] },
  { input: 1, expected: ['()'] },
]

describe(`Solution Tests`, () => {
  testCases.forEach(({ input, expected }, idx) => {
    test(`Example ${idx + 1}`, () => {
      expect(solution(input)).toEqual(expected)
    })
  })
})
