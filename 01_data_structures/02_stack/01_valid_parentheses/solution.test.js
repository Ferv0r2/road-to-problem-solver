const { solution1, solution2 } = require('./solution')

const testCases = [
  { input: '()()', expected: true },
  { input: '(())()', expected: true },
  { input: ')()(', expected: false },
  { input: '(()(', expected: false },
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
