const { solution } = require('./solution')

const testCases = [
  { input: [1, 2, 3, 2, 3], expected: [4, 3, 1, 1, 0] },
  { input: [1, 7, 5, 1, 9, 2, 5, 1], expected: [7, 1, 1, 4, 1, 2, 1, 0] },
]

describe(`Solution Tests`, () => {
  testCases.forEach(({ input, expected }, idx) => {
    test(`Example ${idx + 1}`, () => {
      expect(solution(input)).toEqual(expected)
    })
  })
})
