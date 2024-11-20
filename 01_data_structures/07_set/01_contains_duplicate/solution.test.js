const { solution } = require('./solution')

const testCases = [
  { input: [1, 2, 3, 1], expected: true },
  { input: [1, 2, 3, 4], expected: false },
  { input: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2], expected: true },
]

describe('Solution Tests', () => {
  testCases.forEach(({ input, expected }, idx) => {
    test(`Example ${idx + 1}`, () => {
      expect(solution(input)).toEqual(expected)
    })
  })
})
