const { solution1, solution2, solution3 } = require('./solution')

const testCases = [
  { input: [1, 1, 3, 3, 0, 1, 1], expected: [1, 3, 0, 1] },
  { input: [4, 4, 4, 3, 3], expected: [4, 3] },
]

const solutions = [
  { name: 'Solution 1', func: solution1 },
  { name: 'Solution 2', func: solution2 },
  { name: 'Solution 3', func: solution3 },
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
