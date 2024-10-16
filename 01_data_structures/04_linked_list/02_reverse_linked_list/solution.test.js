const { arrayToList, listToArray } = require('../../../utils/linked_list')
const { solution } = require('./solution')

const testCases = [
  { input: [1, 2], expected: [2, 1] },
  { input: [], expected: [] },
]

describe('Solution Tests', () => {
  testCases.forEach(({ input, expected }, idx) => {
    const head = arrayToList(input)
    const result = solution(head)
    const resultArray = listToArray(result)
    test(`Example ${idx + 1}`, () => {
      expect(resultArray).toEqual(expected)
    })
  })
})
