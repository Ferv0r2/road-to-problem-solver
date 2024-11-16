const { solution } = require('./solution')

const testCases = [
  { input: { nums: [1, 1, 1, 2, 2, 3], k: 2 }, expected: [1, 2] },
  { input: { nums: [1], k: 1 }, expected: [1] },
]

describe('Solution Tests', () => {
  testCases.forEach(({ input, expected }, idx) => {
    test(`Example ${idx + 1}`, () => {
      expect(solution(input.nums, input.k)).toEqual(expected)
    })
  })
})
