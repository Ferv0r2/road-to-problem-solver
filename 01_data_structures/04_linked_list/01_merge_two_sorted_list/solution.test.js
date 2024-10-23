const { arrayToList, listToArray } = require('../../../utils/linked_list')
const { solution } = require('./solution')

const testCases = [
  {
    input: { list1: [1, 2, 4], list2: [1, 3, 4] },
    expected: [1, 1, 2, 3, 4, 4],
  },
  { input: { list1: [], list2: [] }, expected: [] },
  { input: { list1: [], list2: [0] }, expected: [0] },
]

describe('Solution Tests', () => {
  testCases.forEach(({ input, expected }, idx) => {
    const listA = arrayToList(input.list1)
    const listB = arrayToList(input.list2)
    const result = solution(listA, listB)
    const resultArray = listToArray(result)
    test(`Example ${idx + 1}`, () => {
      expect(resultArray).toEqual(expected)
    })
  })
})
