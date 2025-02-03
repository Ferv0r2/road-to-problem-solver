const { solution } = require('./solution')

const testCases = [
  {
    input: {
      n: 3,
      computers: [
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 1],
      ],
    },
    expected: 2,
  },
  {
    input: {
      n: 3,
      computers: [
        [1, 1, 0],
        [1, 1, 1],
        [0, 1, 1],
      ],
    },
    expected: 1,
  },
]

describe('Solution Tests', () => {
  testCases.forEach(({ input, expected }, idx) => {
    test(`Example ${idx + 1}`, () => {
      const { n, computers } = input
      expect(solution(n, computers)).toEqual(expected)
    })
  })
})
