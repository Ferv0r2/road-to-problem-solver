const { solution } = require('./solution')

const testCases = [
  {
    input: { nums: [2, 7, 11, 15], target: 9 },
    expected: [0, 1],
  },
  {
    input: { nums: [3, 2, 4], target: 6 },
    expected: [1, 2],
  },
  {
    input: { nums: [3, 3], target: 6 },
    expected: [0, 1],
  },
]

describe('Solution Tests', () => {
  testCases.forEach(({ input, expected }, idx) => {
    const result = solution(input.nums, input.target)
    test(`Example ${idx + 1}`, () => {
      expect(result).toEqual(expected)
    })
  })
})
