const { solution1, solution2 } = require('./solution')
const { arrayToList, listToArray } = require('../../../utils/linked_list')

const solutions = [
  { name: 'Solution 1', func: solution1 },
  { name: 'Solution 2', func: solution2 },
]

const testCases = [
  {
    input: { head: [1, 2, 3, 4, 5], n: 2 },
    output: [1, 2, 3, 5],
  },
  {
    input: { head: [1], n: 1 },
    output: [],
  },
  {
    input: { head: [1, 2], n: 1 },
    output: [1],
  },
  {
    input: { head: [1, 2], n: 2 },
    output: [2],
  },
]

solutions.forEach(({ name, func }) => {
  describe(`${name} Tests`, () => {
    testCases.forEach(({ input, output }, idx) => {
      const head = arrayToList(input.head)
      const result = func(head, input.n)
      const resultArray = listToArray(result)
      test(`Example ${idx + 1}`, () => {
        expect(resultArray).toEqual(output)
      })
    })
  })
})
