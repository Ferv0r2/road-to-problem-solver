const { solution1, solution2 } = require('./solution')

const testCases = [
  { input: [7, 1, 5, 3, 6, 4], expected: 5 },
  { input: [7, 6, 4, 3, 1], expected: 0 },
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
