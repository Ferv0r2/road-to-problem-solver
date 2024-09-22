const { solution } = require('./solution')

const testCases = [
  { input: [1, 8, 6, 2, 5, 4, 8, 3, 7], expected: 49 },
  { input: [1, 1], expected: 1 },
]

describe(`Solution Tests`, () => {
  testCases.forEach(({ input, expected }, idx) => {
    test(`Example ${idx + 1}`, () => {
      expect(solution(input)).toEqual(expected)
    })
  })
})
