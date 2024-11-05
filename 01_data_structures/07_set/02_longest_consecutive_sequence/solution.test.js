const { solution } = require('./solution')

const testCases = [
  { input: [100, 4, 200, 1, 3, 2], expected: 4 },
  { input: [0, 3, 7, 2, 5, 8, 4, 6, 0, 1], expected: 9 },
]

describe('Solution Tests', () => {
  testCases.forEach(({ input, expected }, idx) => {
    test(`Example ${idx + 1}`, () => {
      expect(solution(input)).toEqual(expected)
    })
  })
})
