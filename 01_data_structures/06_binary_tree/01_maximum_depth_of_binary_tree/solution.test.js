const { arrayToTree } = require('../../../utils/tree_node')
const { solution } = require('./solution')

const testCases = [
  { input: [3, 9, 20, null, null, 15, 7], expected: 3 },
  { input: [1, null, 2], expected: 2 },
]

describe('Solution Tests', () => {
  testCases.forEach(({ input, expected }, idx) => {
    const tree = arrayToTree(input)
    test(`Example ${idx + 1}`, () => {
      expect(solution(tree)).toEqual(expected)
    })
  })
})
