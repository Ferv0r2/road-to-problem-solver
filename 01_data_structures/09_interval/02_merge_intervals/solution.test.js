const { solution } = require('./solution')

const testCases = [
  {
    input: [
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ],
    output: [
      [1, 6],
      [8, 10],
      [15, 18],
    ],
  },
  {
    input: [
      [1, 4],
      [4, 5],
    ],
    output: [[1, 5]],
  },
]

describe('Solution Tests', () => {
  testCases.forEach(({ input, output }, idx) => {
    test(`Example ${idx + 1}`, () => {
      expect(solution(input)).toEqual(output)
    })
  })
})
