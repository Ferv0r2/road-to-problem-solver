const { solution } = require('./solution')

const treeNode = (val = 0, left = null, right = null) => ({ val, left, right })

const testCases = [
  {
    input: treeNode(
      4,
      treeNode(2, treeNode(1), treeNode(3)),
      treeNode(7, treeNode(6), treeNode(9)),
    ),
    expected: treeNode(
      4,
      treeNode(7, treeNode(9), treeNode(6)),
      treeNode(2, treeNode(3), treeNode(1)),
    ),
  },
  {
    input: treeNode(2, treeNode(1), treeNode(3)),
    expected: treeNode(2, treeNode(3), treeNode(1)),
  },
]

describe(`Solution Tests`, () => {
  testCases.forEach(({ input, expected }, idx) => {
    test(`Example ${idx + 1}`, () => {
      expect(solution(input)).toEqual(expected)
    })
  })
})
