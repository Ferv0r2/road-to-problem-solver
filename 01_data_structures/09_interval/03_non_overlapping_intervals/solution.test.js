const { solution } = require('./solution')

const testCases = [
  {
    input: [
      [1, 2],
      [2, 3],
      [3, 4],
      [1, 3],
    ],
    output: 1,
  },
  {
    input: [
      [1, 2],
      [1, 2],
      [1, 2],
    ],
    output: 2,
  },
  {
    input: [
      [1, 2],
      [2, 3],
    ],
    output: 0,
  },
]

describe('Solution Tests', () => {
  testCases.forEach(({ input, output }, idx) => {
    test(`Example ${idx + 1}`, () => {
      expect(solution(input)).toEqual(output)
    })
  })
})
