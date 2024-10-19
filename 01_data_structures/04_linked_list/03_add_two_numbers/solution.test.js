const { arrayToList, listToArray } = require('../../../utils/linked_list')
const { solution } = require('./solution')

const testCases = [
  { input: { l1: [2, 4, 3], l2: [5, 6, 4] }, expected: [7, 0, 8] },
  { input: { l1: [0], l2: [0] }, expected: [0] },
  {
    input: { l1: [9, 9, 9, 9, 9, 9, 9], l2: [9, 9, 9, 9] },
    expected: [8, 9, 9, 9, 0, 0, 0, 1],
  },
]

describe('Solution Tests', () => {
  testCases.forEach(({ input, expected }, idx) => {
    const listA = arrayToList(input.l1)
    const listB = arrayToList(input.l2)
    const result = solution(listA, listB)
    const resultArray = listToArray(result)
    test(`Example ${idx + 1}`, () => {
      expect(resultArray).toEqual(expected)
    })
  })
})
