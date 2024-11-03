const { arrayToTree } = require('../../../utils/tree_node')
const { solution } = require('./solution')

const testCases = [
  { input: [2, 1, 3], expected: true },
  { input: [5, 1, 4, null, null, 3, 6], expected: false },
]

describe('Solution Tests', () => {
  testCases.forEach(({ input, expected }, idx) => {
    const tree = arrayToTree(input)
    test(`Example ${idx + 1}`, () => {
      expect(solution(tree)).toEqual(expected)
    })
  })
})
