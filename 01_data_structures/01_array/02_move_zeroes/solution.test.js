const { solution1, solution2 } = require('./solution')

const testCases = [
  { input: [0, 1, 0, 3, 12], expected: [1, 3, 12, 0, 0] },
  { input: [0], expected: [0] },
]

const solutions = [
  { name: 'Solution 1', func: solution1 },
  { name: 'Solution 2', func: solution2 },
]

solutions.forEach(({ name, func }) => {
  describe(`${name} Tests`, () => {
    testCases.forEach(({ input, expected }, idx) => {
      test(`Example ${idx + 1}`, () => {
        expect(func(input)).toEqual(expected)
      })
    })
  })
})