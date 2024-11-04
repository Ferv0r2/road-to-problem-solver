const { solution1, solution2 } = require('./solution')

const testCases = [
  { input: 2, expected: 2 },
  { input: 3, expected: 3 },
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
