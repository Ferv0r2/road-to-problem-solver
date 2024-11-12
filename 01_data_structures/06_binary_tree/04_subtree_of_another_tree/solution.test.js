const { arrayToTree } = require('../../../utils/tree_node')
const { solution } = require('./solution')

const testCases = [
  { input: { root: [3, 4, 5, 1, 2], subRoot: [4, 1, 2] }, expected: true },
  {
    input: {
      root: [3, 4, 5, 1, 2, null, null, null, null, 0],
      subRoot: [4, 1, 2],
    },
    expected: false,
  },
]

describe('Solution Tests', () => {
  testCases.forEach(({ input, expected }, idx) => {
    const rootTree = arrayToTree(input.root)
    const subRootTree = arrayToTree(input.subRoot)
    test(`Example ${idx + 1}`, () => {
      expect(solution(rootTree, subRootTree)).toEqual(expected)
    })
  })
})
