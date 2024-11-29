const { solution1, solution2, solution3 } = require('./solution')

const testCases = [
  { input: { nums: [3, 2, 1, 5, 6, 4], k: 2 }, expected: 5 },
  { input: { nums: [3, 2, 3, 1, 2, 4, 5, 5, 6], k: 4 }, expected: 4 },
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
        expect(func(input.nums, input.k)).toEqual(expected)
      })
    })
  })
})
