const { solution } = require('./solution')

const testCases = [
  {
    input: {
      image: [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
      ],
      sr: 1,
      sc: 1,
      color: 2,
    },
    expected: [
      [2, 2, 2],
      [2, 2, 0],
      [2, 0, 1],
    ],
  },
  {
    input: {
      image: [
        [0, 0, 0],
        [0, 0, 0],
      ],
      sr: 0,
      sc: 0,
      color: 0,
    },
    expected: [
      [0, 0, 0],
      [0, 0, 0],
    ],
  },
]

describe('Solution Tests', () => {
  testCases.forEach(({ input, expected }, idx) => {
    test(`Example ${idx + 1}`, () => {
      const { image, sr, sc, color } = input
      expect(solution(image, sr, sc, color)).toEqual(expected)
    })
  })
})
